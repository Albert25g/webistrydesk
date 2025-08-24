import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

interface Lead {
  name: string;
  email: string;
  score: number;
  source: string;
  temperature: 'cold' | 'warm' | 'hot' | 'burning';
  phone?: string;
  company?: string;
  message?: string;
  lastAction?: string;
  timeOnSite?: string;
  pagesVisited?: string[];
}

// Lead scoring system
const LEAD_SCORING = {
  actions: {
    download_conversion_toolkit: 25,
    download_seo_guide: 20,
    download_design_checklist: 15,
    contact_form_submission: 40,
    strategy_call_booking: 60,
    pricing_page_visit: 15,
    case_studies_page_visit: 10,
    services_page_visit: 10,
    return_visitor: 5,
    email_open: 2,
    email_click: 8,
  },
  thresholds: {
    cold: 0,
    warm: 30,
    hot: 60,
    burning: 100,
  },
};

// CRM Integration Templates
const CRM_TEMPLATES = {
  new_lead: (lead: Lead) => ({
    subject: `🔥 NEW LEAD: ${lead.name} (${lead.score} points)`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 24px;">🎯 New Lead Alert</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Action required - ${
            lead.temperature
          } lead</p>
        </div>
        
        <div style="padding: 30px; background: white;">
          <div style="background: ${
            lead.temperature === 'burning'
              ? '#fee2e2'
              : lead.temperature === 'hot'
              ? '#fef3c7'
              : '#f3f4f6'
          }; 
                      border-left: 4px solid ${
                        lead.temperature === 'burning'
                          ? '#dc2626'
                          : lead.temperature === 'hot'
                          ? '#f59e0b'
                          : '#6b7280'
                      }; 
                      padding: 20px; margin-bottom: 25px;">
            <h2 style="margin: 0 0 10px 0; color: #111; font-size: 18px;">
              ${lead.name} - ${lead.temperature.toUpperCase()} Lead (${
      lead.score
    } points)
            </h2>
            <p style="margin: 0; color: #666;">
              <strong>Email:</strong> ${lead.email}<br>
              <strong>Phone:</strong> ${lead.phone || 'Not provided'}<br>
              <strong>Company:</strong> ${lead.company || 'Not provided'}
            </p>
          </div>
          
          <h3 style="color: #333; margin: 20px 0 10px 0;">📋 Lead Details:</h3>
          <ul style="color: #666; line-height: 1.6; padding-left: 20px;">
            <li><strong>Source:</strong> ${lead.source}</li>
            <li><strong>Last Action:</strong> ${lead.lastAction}</li>
            <li><strong>Time on Site:</strong> ${
              lead.timeOnSite || 'Unknown'
            }</li>
            <li><strong>Pages Visited:</strong> ${
              lead.pagesVisited || 'Unknown'
            }</li>
          </ul>
          
          ${
            lead.message
              ? `
          <h3 style="color: #333; margin: 20px 0 10px 0;">💬 Message:</h3>
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 3px solid #3b82f6;">
            <p style="margin: 0; color: #666; font-style: italic;">"${lead.message}"</p>
          </div>
          `
              : ''
          }
          
          <div style="margin: 30px 0; padding: 20px; background: #f0f9ff; border-radius: 8px;">
            <h3 style="color: #1e40af; margin: 0 0 15px 0;">🚀 Recommended Actions:</h3>
            ${
              lead.temperature === 'burning'
                ? `
              <p style="color: #dc2626; font-weight: bold; margin: 0 0 10px 0;">⚠️ HIGH PRIORITY - Contact within 1 hour</p>
              <ul style="color: #666; margin: 0; padding-left: 20px;">
                <li>Call immediately - they're ready to buy</li>
                <li>Offer free strategy session</li>
                <li>Send pricing information</li>
              </ul>
            `
                : lead.temperature === 'hot'
                ? `
              <p style="color: #f59e0b; font-weight: bold; margin: 0 0 10px 0;">🔥 Contact within 4 hours</p>
              <ul style="color: #666; margin: 0; padding-left: 20px;">
                <li>Send personalized email</li>
                <li>Offer free consultation</li>
                <li>Share relevant case studies</li>
              </ul>
            `
                : `
              <p style="color: #6b7280; margin: 0 0 10px 0;">📧 Follow up within 24 hours</p>
              <ul style="color: #666; margin: 0; padding-left: 20px;">
                <li>Add to email nurture sequence</li>
                <li>Send additional resources</li>
                <li>Schedule follow-up in 1 week</li>
              </ul>
            `
            }
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="mailto:${
              lead.email
            }?subject=Re: Your inquiry about WebistryDesk services" 
               style="background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-right: 10px; display: inline-block;">
              Email ${lead.name}
            </a>
            ${
              lead.phone
                ? `
            <a href="tel:${lead.phone}" 
               style="background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Call ${lead.name}
            </a>
            `
                : ''
            }
          </div>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px; font-size: 12px; color: #9ca3af;">
            <p style="margin: 0;">Lead generated at: ${new Date().toLocaleString()}</p>
            <p style="margin: 5px 0 0 0;">WebistryDesk CRM System</p>
          </div>
        </div>
      </div>
    `,
    text: `NEW LEAD: ${lead.name} (${
      lead.score
    } points) - ${lead.temperature.toUpperCase()} 
    
Email: ${lead.email}
Phone: ${lead.phone || 'Not provided'}
Company: ${lead.company || 'Not provided'}
Source: ${lead.source}
Last Action: ${lead.lastAction}

${lead.message ? `Message: "${lead.message}"` : ''}

Recommended action: ${
      lead.temperature === 'burning'
        ? 'Contact immediately'
        : lead.temperature === 'hot'
        ? 'Contact within 4 hours'
        : 'Follow up within 24 hours'
    }`,
  }),

  hot_lead_alert: (lead: Lead) => ({
    subject: `🚨 URGENT: ${lead.name} is a HOT lead - Call NOW!`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fef2f2; border: 2px solid #fecaca;">
        <div style="background: #dc2626; padding: 20px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 22px;">🚨 HOT LEAD ALERT 🚨</h1>
          <p style="margin: 10px 0 0 0; font-size: 14px;">Immediate action required</p>
        </div>
        
        <div style="padding: 25px;">
          <div style="background: white; border: 2px solid #fca5a5; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h2 style="color: #dc2626; margin: 0 0 10px 0;">${lead.name} - ${
      lead.score
    } points</h2>
            <p style="margin: 0; color: #374151;">
              <strong>📧 Email:</strong> <a href="mailto:${lead.email}">${
      lead.email
    }</a><br>
              ${
                lead.phone
                  ? `<strong>📞 Phone:</strong> <a href="tel:${lead.phone}">${lead.phone}</a><br>`
                  : ''
              }
              <strong>🏢 Company:</strong> ${lead.company || 'Not provided'}
            </p>
          </div>
          
          <div style="background: #fffbeb; border: 1px solid #fed7aa; border-radius: 8px; padding: 15px; margin-bottom: 20px;">
            <p style="color: #92400e; font-weight: bold; margin: 0 0 10px 0;">⏰ Time-sensitive actions:</p>
            <ul style="color: #78350f; margin: 0; padding-left: 20px; font-size: 14px;">
              <li>Call within the next 5 minutes (strike while iron is hot!)</li>
              <li>If no answer, send immediate follow-up email</li>
              <li>Offer free strategy session or audit</li>
              <li>Have pricing ready - they're likely ready to buy</li>
            </ul>
          </div>
          
          <div style="text-align: center;">
            <a href="tel:${
              lead.phone
            }" style="background: #dc2626; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block; margin-bottom: 10px;">
              📞 CALL ${lead.name.split(' ')[0].toUpperCase()} NOW
            </a>
            <br>
            <a href="mailto:${
              lead.email
            }?subject=Quick question about your project" style="background: #1f2937; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-size: 14px; display: inline-block;">
              📧 Send Follow-up Email
            </a>
          </div>
        </div>
      </div>
    `,
    text: `🚨 HOT LEAD ALERT: ${lead.name} (${lead.score} points) - CALL NOW!
    
Email: ${lead.email}
${lead.phone ? `Phone: ${lead.phone}` : ''}
Company: ${lead.company || 'Not provided'}

ACTION REQUIRED: Call within 5 minutes! They're ready to buy.`,
  }),
};

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, leadData, notificationType = 'new_lead' } = body;

    if (!action || !leadData) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Calculate lead score
    let totalScore = 0;
    if (Array.isArray(leadData.actions)) {
      leadData.actions.forEach((actionName: string) => {
        totalScore +=
          LEAD_SCORING.actions[
            actionName as keyof typeof LEAD_SCORING.actions
          ] || 0;
      });
    }

    // Determine lead temperature
    let temperature = 'cold';
    if (totalScore >= LEAD_SCORING.thresholds.burning) {
      temperature = 'burning';
    } else if (totalScore >= LEAD_SCORING.thresholds.hot) {
      temperature = 'hot';
    } else if (totalScore >= LEAD_SCORING.thresholds.warm) {
      temperature = 'warm';
    }

    const enrichedLead = {
      ...leadData,
      score: totalScore,
      temperature,
      timestamp: new Date().toISOString(),
    };

    // Send appropriate notification
    const template =
      CRM_TEMPLATES[notificationType as keyof typeof CRM_TEMPLATES] ||
      CRM_TEMPLATES.new_lead;
    const emailContent = template(enrichedLead);

    // Send to internal team
    const internalEmails = [
      process.env.SMTP_USER, // Main business email
      'alerts@webistrydesk.com', // Could be a dedicated alerts email
    ].filter(Boolean);

    await Promise.all(
      internalEmails.map((email) =>
        transporter.sendMail({
          from: `"WebistryDesk CRM" <${process.env.SMTP_USER}>`,
          to: email,
          subject: emailContent.subject,
          text: emailContent.text,
          html: emailContent.html,
        })
      )
    );

    // If it's a hot/burning lead, send additional urgent alert
    if (temperature === 'hot' || temperature === 'burning') {
      const urgentAlert = CRM_TEMPLATES.hot_lead_alert(enrichedLead);

      // Send SMS alert (you would integrate with Twilio or similar service)
      // await sendSMSAlert(urgentAlert.text)

      // Send additional email with high priority
      await transporter.sendMail({
        from: `"WebistryDesk URGENT" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER,
        subject: urgentAlert.subject,
        text: urgentAlert.text,
        html: urgentAlert.html,
        priority: 'high',
        headers: {
          'X-Priority': '1',
          'X-MSMail-Priority': 'High',
          Importance: 'high',
        },
      });
    }

    // Log to console for debugging (in production, you'd save to database)
    console.log('CRM Alert Sent:', {
      lead: enrichedLead.name,
      email: enrichedLead.email,
      score: enrichedLead.score,
      temperature: enrichedLead.temperature,
      timestamp: new Date().toISOString(),
    });

    return Response.json({
      success: true,
      leadScore: totalScore,
      temperature,
      message: 'CRM notification sent successfully',
    });
  } catch (error) {
    console.error('CRM notification error:', error);
    return Response.json(
      { error: 'Failed to process CRM notification' },
      { status: 500 }
    );
  }
}
