import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

// Email sequence templates
const EMAIL_SEQUENCES = {
  'conversion-toolkit': [
    {
      delay: 0, // Immediate
      subject: '🎉 Your Conversion Toolkit is here!',
      template: 'welcome-conversion',
    },
    {
      delay: 24 * 60 * 60 * 1000, // 24 hours
      subject: '💡 Quick wins from your toolkit',
      template: 'followup-tips',
    },
    {
      delay: 3 * 24 * 60 * 60 * 1000, // 3 days
      subject: '🚀 Ready to 10x your conversions?',
      template: 'strategy-call-offer',
    },
    {
      delay: 7 * 24 * 60 * 60 * 1000, // 7 days
      subject: '📈 Case study: How we increased conversions 340%',
      template: 'case-study',
    },
  ],
  'seo-guide': [
    {
      delay: 0,
      subject: '🔍 Your SEO Guide + Bonus Checklist',
      template: 'welcome-seo',
    },
    {
      delay: 2 * 24 * 60 * 60 * 1000, // 2 days
      subject: '⚠️ The #1 SEO mistake killing your rankings',
      template: 'seo-mistake',
    },
    {
      delay: 5 * 24 * 60 * 60 * 1000, // 5 days
      subject: '🎯 Free SEO audit for your website?',
      template: 'seo-audit-offer',
    },
  ],
  'design-checklist': [
    {
      delay: 0,
      subject: '✨ Your Design Checklist + Pro Templates',
      template: 'welcome-design',
    },
    {
      delay: 3 * 24 * 60 * 60 * 1000, // 3 days
      subject: '🎨 The psychology behind high-converting designs',
      template: 'design-psychology',
    },
    {
      delay: 6 * 24 * 60 * 60 * 1000, // 6 days
      subject: '🔥 Want a professional redesign quote?',
      template: 'redesign-offer',
    },
  ],
};

// Email templates
const EMAIL_TEMPLATES = {
  'welcome-conversion': (firstName: string) => ({
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">🎉 Your Toolkit is Ready!</h1>
          <p style="color: #e0e6ff; margin: 10px 0 0 0; font-size: 16px;">Let's turn your website into a conversion machine</p>
        </div>
        
        <div style="padding: 40px 30px;">
          <p style="font-size: 18px; color: #333; margin-bottom: 20px;">Hey ${firstName}! 👋</p>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">
            Your Conversion Optimization Toolkit is packed with strategies that have helped our clients increase their conversion rates by an average of 240%.
          </p>
          
          <div style="background: #f8fafc; border-left: 4px solid #667eea; padding: 20px; margin: 25px 0;">
            <h3 style="color: #333; margin-top: 0;">🚀 Quick Start Guide:</h3>
            <ul style="color: #666; padding-left: 20px;">
              <li>Start with the "Psychology Triggers" checklist (Page 3)</li>
              <li>Implement the "Above-fold Formula" (Page 7)</li>
              <li>Use our A/B testing template (Page 12)</li>
            </ul>
          </div>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 30px;">
            <strong>Pro tip:</strong> Most businesses see results within the first 2 weeks of implementation. 
            Focus on the high-impact changes first!
          </p>
          
          <div style="text-align: center; margin: 35px 0;">
            <a href="https://webistrydesk.com/contact" style="background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
              Questions? Let's Chat! 💬
            </a>
          </div>
          
          <p style="color: #888; font-size: 14px; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
            Need help implementing these strategies? Reply to this email - we respond to every message personally.
          </p>
        </div>
      </div>
    `,
    text: `Hey ${firstName}! Your Conversion Optimization Toolkit is ready! Start with the Psychology Triggers checklist and implement the Above-fold Formula for quick wins. Questions? Just reply to this email!`,
  }),

  'followup-tips': (firstName: string) => ({
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: #1a202c; padding: 30px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">💡 Quick Conversion Wins</h1>
        </div>
        
        <div style="padding: 40px 30px;">
          <p style="font-size: 18px; color: #333; margin-bottom: 20px;">Hi ${firstName}! 👋</p>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">
            Have you had a chance to dive into your toolkit yet? Here are 3 quick wins you can implement TODAY:
          </p>
          
          <div style="background: #fff5f5; border: 1px solid #fed7d7; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h3 style="color: #c53030; margin-top: 0;">🔥 30-Second Fix:</h3>
            <p style="color: #666; margin-bottom: 0;">Add urgency to your main CTA button. Change "Learn More" to "Start My Free Trial Today" - this alone can boost conversions 15-25%.</p>
          </div>
          
          <div style="background: #f0fff4; border: 1px solid #9ae6b4; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h3 style="color: #2f855a; margin-top: 0;">⚡ 5-Minute Fix:</h3>
            <p style="color: #666; margin-bottom: 0;">Add social proof near your signup form. Even a simple "Join 2,500+ happy customers" can increase form submissions by 30%.</p>
          </div>
          
          <div style="background: #ebf8ff; border: 1px solid #90cdf4; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h3 style="color: #3182ce; margin-top: 0;">💎 Premium Tip:</h3>
            <p style="color: #666; margin-bottom: 0;">Use the "Problem-Agitation-Solution" framework from page 9. This psychological sequence is behind most high-converting sales pages.</p>
          </div>
          
          <div style="text-align: center; margin: 35px 0;">
            <a href="https://webistrydesk.com/contact" style="background: #48bb78; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
              Need Help Implementing? 🚀
            </a>
          </div>
        </div>
      </div>
    `,
    text: `Hi ${firstName}! Quick conversion wins: 1) Add urgency to CTAs 2) Include social proof 3) Use Problem-Agitation-Solution framework. Need help? Just reply!`,
  }),

  'strategy-call-offer': (firstName: string) => ({
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 26px;">🚀 Ready to 10x Your Results?</h1>
          <p style="color: #e0e6ff; margin: 10px 0 0 0; font-size: 16px;">Free strategy call - limited spots available</p>
        </div>
        
        <div style="padding: 40px 30px;">
          <p style="font-size: 18px; color: #333; margin-bottom: 20px;">Hi ${firstName}! 👋</p>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">
            You downloaded our toolkit 3 days ago, and I'm curious - have you started implementing any of the strategies?
          </p>
          
          <div style="background: #fffbeb; border: 1px solid #f6d55c; border-radius: 8px; padding: 25px; margin: 25px 0; text-align: center;">
            <h3 style="color: #92400e; margin-top: 0;">⚠️ Here's the thing...</h3>
            <p style="color: #666; margin-bottom: 15px; font-size: 16px;">
              Most people download resources but never implement them. The difference between businesses that grow 10x and those that stay stuck? <strong>Implementation + Strategy.</strong>
            </p>
            <p style="color: #d97706; font-weight: bold; margin: 0; font-size: 14px;">
              That's where we come in.
            </p>
          </div>
          
          <h3 style="color: #333; margin: 30px 0 15px 0;">What if you could:</h3>
          <ul style="color: #666; line-height: 1.8; padding-left: 20px; margin-bottom: 30px;">
            <li>Double your conversion rates in the next 30 days</li>
            <li>Get a custom roadmap for YOUR specific business</li>
            <li>Skip the guesswork and costly mistakes</li>
            <li>Have our team handle the technical implementation</li>
          </ul>
          
          <div style="background: #f0f9ff; border: 2px solid #3b82f6; border-radius: 12px; padding: 30px; margin: 30px 0; text-align: center;">
            <h3 style="color: #1e40af; margin-top: 0; font-size: 20px;">🎯 FREE Strategy Call</h3>
            <p style="color: #666; margin-bottom: 20px; line-height: 1.6;">
              30-minute deep-dive where we'll audit your current setup and create a custom action plan. 
              <strong>No sales pitch, just pure value.</strong>
            </p>
            <a href="https://webistrydesk.com/contact?utm_source=email&utm_campaign=strategy_call" style="background: #3b82f6; color: white; padding: 18px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; font-size: 16px;">
              Book My Free Call 📞
            </a>
            <p style="color: #888; font-size: 12px; margin: 15px 0 0 0;">
              ⏰ Only 3 spots left this week
            </p>
          </div>
          
          <p style="color: #666; line-height: 1.6; font-size: 14px; margin-top: 30px; font-style: italic;">
            P.S. - Even if we don't end up working together, you'll walk away with at least 3 actionable strategies you can implement immediately. That's our promise.
          </p>
        </div>
      </div>
    `,
    text: `Hi ${firstName}! Ready to 10x your results? Book a free 30-minute strategy call where we'll audit your setup and create a custom action plan. No sales pitch, just value. Only 3 spots left this week!`,
  }),

  'case-study': (firstName: string) => ({
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <div style="background: #065f46; padding: 40px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">📈 340% Conversion Increase</h1>
          <p style="color: #a7f3d0; margin: 10px 0 0 0; font-size: 16px;">Real client case study</p>
        </div>
        
        <div style="padding: 40px 30px;">
          <p style="font-size: 18px; color: #333; margin-bottom: 20px;">Hey ${firstName}! 👋</p>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">
            I wanted to share a quick success story that perfectly illustrates the power of strategic conversion optimization...
          </p>
          
          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 25px; margin: 25px 0;">
            <h3 style="color: #166534; margin-top: 0;">📊 The Challenge:</h3>
            <p style="color: #666; margin-bottom: 15px;">
              TechFlow Solutions came to us with a 1.2% conversion rate on their landing page. They were getting traffic but struggling to convert visitors into leads.
            </p>
            <h3 style="color: #166534; margin: 20px 0 10px 0;">⚡ What We Did:</h3>
            <ul style="color: #666; padding-left: 20px; margin-bottom: 15px;">
              <li>Applied the "Psychology Triggers" from your toolkit</li>
              <li>Restructured their value proposition using our framework</li>
              <li>Added strategic social proof and urgency elements</li>
              <li>Optimized their form placement and design</li>
            </ul>
            <h3 style="color: #166534; margin: 20px 0 10px 0;">🎉 The Results:</h3>
            <p style="color: #666; margin: 0;">
              <strong>340% increase in conversions</strong> (from 1.2% to 5.3%) within 30 days. That translated to $47,000 in additional monthly revenue.
            </p>
          </div>
          
          <div style="background: #fffbeb; border-left: 4px solid #f59e0b; padding: 20px; margin: 25px 0;">
            <p style="color: #92400e; margin: 0; font-style: italic;">
              <strong>"The team at WebistryDesk didn't just build us a website - they built us a revenue machine. Our ROI was 12x in the first quarter alone."</strong> <br>
              - Sarah Mitchell, CEO of TechFlow Solutions
            </p>
          </div>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 30px;">
            The best part? We used the exact same principles that are in your toolkit. The difference was having an experienced team handle the implementation and optimization.
          </p>
          
          <div style="text-align: center; margin: 35px 0;">
            <p style="color: #666; margin-bottom: 20px;">Want similar results for your business?</p>
            <a href="https://webistrydesk.com/contact?utm_source=email&utm_campaign=case_study" style="background: #059669; color: white; padding: 18px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; font-size: 16px;">
              Let's Chat About Your Goals 🚀
            </a>
          </div>
          
          <p style="color: #888; font-size: 14px; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
            Ready to be our next success story?
          </p>
        </div>
      </div>
    `,
    text: `Hey ${firstName}! TechFlow Solutions increased conversions 340% (1.2% to 5.3%) using strategies from your toolkit + our implementation expertise. That's $47,000 in additional monthly revenue. Want similar results? Let's chat!`,
  }),
};

// Create transporter
const transporter = nodemailer.createTransporter({
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
    const {
      email,
      firstName,
      leadMagnet,
      sequenceStep = 0,
    } = await request.json();

    if (!email || !firstName || !leadMagnet) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const sequence =
      EMAIL_SEQUENCES[leadMagnet as keyof typeof EMAIL_SEQUENCES];
    if (!sequence || !sequence[sequenceStep]) {
      return Response.json(
        { error: 'Invalid sequence or step' },
        { status: 400 }
      );
    }

    const emailConfig = sequence[sequenceStep];
    const template =
      EMAIL_TEMPLATES[emailConfig.template as keyof typeof EMAIL_TEMPLATES];

    if (!template) {
      return Response.json({ error: 'Template not found' }, { status: 400 });
    }

    const { html, text } = template(firstName);

    await transporter.sendMail({
      from: `"WebistryDesk Team" <${process.env.SMTP_USER}>`,
      to: email,
      subject: emailConfig.subject,
      text,
      html,
    });

    // Schedule next email in sequence if there is one
    if (sequence[sequenceStep + 1]) {
      const nextEmailDelay = sequence[sequenceStep + 1].delay;

      // In a production app, you'd use a job queue like Bull, Agenda, or similar
      // For now, we'll just log the scheduling (you can implement your preferred solution)
      console.log(`Next email for ${email} scheduled in ${nextEmailDelay}ms`);

      // Example with setTimeout (not recommended for production):
      // setTimeout(async () => {
      //   await fetch(`${process.env.NEXTAUTH_URL}/api/email-sequence`, {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({
      //       email,
      //       firstName,
      //       leadMagnet,
      //       sequenceStep: sequenceStep + 1
      //     })
      //   })
      // }, nextEmailDelay)
    }

    return Response.json({
      success: true,
      message: 'Email sent successfully',
      nextEmail: sequence[sequenceStep + 1] ? 'scheduled' : 'sequence_complete',
    });
  } catch (error) {
    console.error('Email sequence error:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
