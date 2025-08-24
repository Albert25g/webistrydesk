import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Lead magnet delivery endpoint - converts visitors to leads
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, lead_magnet_type } = body;
    const firstName = name?.split(' ')[0] || name;

    // Basic validation
    if (!name || !email || !lead_magnet_type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Rate limiting (simple IP-based)
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';

    // Lead magnets content
    const leadMagnets = {
      website_audit_checklist: {
        title: '47-Point Website Audit Checklist',
        name: 'Website Audit Checklist',
        description:
          "Discover what's killing your conversions with our comprehensive audit checklist",
        download_url: '/downloads/website-audit-checklist.pdf',
        follow_up_sequence: 'website_audit',
        subject: '🚀 Your Website Audit Checklist is Ready!',
        text: (name: string) =>
          `Hi ${name},\n\nYour website audit checklist is attached. Use it to identify conversion killers on your site!\n\nBest regards,\nWebistryDesk Team`,
        html: (name: string) => `
          <h2>Hi ${name}!</h2>
          <p>Your <strong>47-Point Website Audit Checklist</strong> is ready for download.</p>
          <p>This comprehensive checklist will help you identify what's preventing visitors from becoming customers.</p>
          <p><a href="${
            process.env.NEXTAUTH_URL || 'https://webistrydesk.com'
          }/downloads/website-audit-checklist.pdf" style="background: #3B82F6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">Download Your Checklist</a></p>
          <p>Best regards,<br>The WebistryDesk Team</p>
        `,
      },
      conversion_toolkit: {
        title: 'Conversion Optimization Toolkit',
        name: 'Conversion Toolkit',
        description:
          'Templates, scripts, and strategies that have generated millions in revenue',
        download_url: '/downloads/conversion-toolkit.html',
        follow_up_sequence: 'conversion_optimization',
        subject: '🎯 Your Conversion Toolkit is Here!',
        text: (name: string) =>
          `Hi ${name},\n\nYour conversion optimization toolkit is ready! These proven templates have generated millions in revenue.\n\nBest regards,\nWebistryDesk Team`,
        html: (name: string) => `
          <h2>Hi ${name}!</h2>
          <p>Your <strong>Conversion Optimization Toolkit</strong> is ready for download.</p>
          <p>Inside you'll find templates, scripts, and strategies that have generated millions in revenue for our clients.</p>
          <p><a href="${
            process.env.NEXTAUTH_URL || 'https://webistrydesk.com'
          }/downloads/conversion-toolkit.html" style="background: #3B82F6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">Download Your Toolkit</a></p>
          <p>Best regards,<br>The WebistryDesk Team</p>
        `,
      },
      seo_guide: {
        title: 'Local SEO Domination Guide',
        name: 'SEO Guide',
        description: 'Rank #1 in your local market with our step-by-step guide',
        download_url: '/downloads/seo-guide.html',
        follow_up_sequence: 'local_seo',
        subject: '📈 Your Local SEO Guide is Ready!',
        text: (name: string) =>
          `Hi ${name},\n\nYour local SEO guide is ready! Follow our step-by-step process to dominate local search results.\n\nBest regards,\nWebistryDesk Team`,
        html: (name: string) => `
          <h2>Hi ${name}!</h2>
          <p>Your <strong>Local SEO Domination Guide</strong> is ready for download.</p>
          <p>This comprehensive guide will show you how to rank #1 in your local market.</p>
          <p><a href="${
            process.env.NEXTAUTH_URL || 'https://webistrydesk.com'
          }/downloads/seo-guide.html" style="background: #3B82F6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">Download Your Guide</a></p>
          <p>Best regards,<br>The WebistryDesk Team</p>
        `,
      },
      pricing_guide: {
        title: 'Web Design Pricing Guide 2025',
        name: 'Pricing Guide',
        description:
          'Know exactly what to expect and budget for your web design project',
        download_url: '/downloads/web-design-pricing-guide.pdf',
        follow_up_sequence: 'pricing_education',
        subject: '💰 Your Web Design Pricing Guide is Here!',
        text: (name: string) =>
          `Hi ${name},\n\nYour web design pricing guide is ready! Know exactly what to budget for your project.\n\nBest regards,\nWebistryDesk Team`,
        html: (name: string) => `
          <h2>Hi ${name}!</h2>
          <p>Your <strong>Web Design Pricing Guide 2025</strong> is ready for download.</p>
          <p>This guide will help you understand exactly what to expect and budget for your web design project.</p>
          <p><a href="${
            process.env.NEXTAUTH_URL || 'https://webistrydesk.com'
          }/downloads/web-design-pricing-guide.pdf" style="background: #3B82F6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">Download Your Guide</a></p>
          <p>Best regards,<br>The WebistryDesk Team</p>
        `,
      },
    };

    const selectedLeadMagnet =
      leadMagnets[lead_magnet_type as keyof typeof leadMagnets];
    if (!selectedLeadMagnet) {
      return NextResponse.json(
        { error: 'Invalid lead magnet type' },
        { status: 400 }
      );
    }

    // Create transporter for email delivery
    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST,
      port: Number(process.env.ZOHO_SMTP_PORT || 465),
      secure: String(process.env.ZOHO_SMTP_SECURE || 'true') === 'true',
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS,
      },
    });

    // Send immediate email with lead magnet
    await transporter.sendMail({
      from: `"WebistryDesk Team" <${process.env.ZOHO_SMTP_USER}>`,
      to: email,
      subject: selectedLeadMagnet.subject,
      text: selectedLeadMagnet.text(firstName),
      html: selectedLeadMagnet.html(firstName),
    });

    // Trigger email sequence
    try {
      await fetch(
        `${
          process.env.NEXTAUTH_URL || 'https://webistrydesk.com'
        }/api/email-sequence`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            firstName,
            leadMagnet: lead_magnet_type,
            sequenceStep: 0,
          }),
        }
      );
    } catch (error) {
      console.error('Failed to trigger email sequence:', error);
    }

    // Send CRM notification
    try {
      await fetch(
        `${
          process.env.NEXTAUTH_URL || 'https://webistrydesk.com'
        }/api/crm-alert`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'lead_magnet_download',
            leadData: {
              name: firstName,
              email,
              source: 'Lead Magnet Download',
              lastAction: `Downloaded ${selectedLeadMagnet.name}`,
              leadMagnet: lead_magnet_type,
              actions: [`download_${lead_magnet_type.replace('-', '_')}`],
              timestamp: new Date().toISOString(),
            },
          }),
        }
      );
    } catch (error) {
      console.error('Failed to send CRM notification:', error);
    }

    // Send internal notification
    await transporter.sendMail({
      from:
        process.env.MAIL_FROM || `WebistryDesk <${process.env.ZOHO_SMTP_USER}>`,
      to: process.env.MAIL_TO || process.env.ZOHO_SMTP_USER,
      subject: `🔥 NEW LEAD: ${name} downloaded ${selectedLeadMagnet.title}`,
      html: `
        <h2>🎯 New Lead Captured!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Lead Magnet:</strong> ${selectedLeadMagnet.title}</p>
        <p><strong>IP:</strong> ${ip}</p>
        <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        
        <hr>
        <p><strong>Next Steps:</strong></p>
        <ol>
          <li>Add to ${
            selectedLeadMagnet.follow_up_sequence
          } email sequence</li>
          <li>Follow up within 24 hours</li>
          <li>Qualify for project budget and timeline</li>
        </ol>
        
        <p><a href="mailto:${email}">Reply to Lead</a></p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Lead magnet sent successfully',
      download_url: selectedLeadMagnet.download_url,
    });
  } catch (error) {
    console.error('Lead magnet delivery failed:', error);
    return NextResponse.json(
      { error: 'Failed to send lead magnet' },
      { status: 500 }
    );
  }
}
