import { NextRequest } from 'next/server';

interface EmailData {
  name?: string;
  email?: string;
  formType?: string;
  visitedPages?: string[];
  leadMagnet?: string;
}

// Marketing automation workflows
const WORKFLOWS = {
  abandoned_lead_magnet: {
    name: 'Abandoned Lead Magnet Recovery',
    trigger: 'lead_magnet_form_started_but_not_completed',
    sequence: [
      {
        delay: 10 * 60 * 1000, // 10 minutes
        action: 'send_email',
        template: 'abandoned_form_reminder',
      },
    ],
  },
  high_engagement_visitor: {
    name: 'High Engagement Visitor Nurture',
    trigger: 'multiple_pages_visited_or_long_session',
    sequence: [
      {
        delay: 0,
        action: 'send_email',
        template: 'high_engagement_followup',
      },
      {
        delay: 24 * 60 * 60 * 1000, // 24 hours
        action: 'send_email',
        template: 'free_consultation_offer',
      },
    ],
  },
  pricing_page_visitor: {
    name: 'Pricing Page Visitor Follow-up',
    trigger: 'pricing_page_visited',
    sequence: [
      {
        delay: 2 * 60 * 60 * 1000, // 2 hours
        action: 'send_email',
        template: 'pricing_followup',
      },
      {
        delay: 24 * 60 * 60 * 1000, // 24 hours
        action: 'send_email',
        template: 'case_studies_social_proof',
      },
    ],
  },
};

const EMAIL_TEMPLATES = {
  abandoned_form_reminder: (data: EmailData) => ({
    subject: '⏰ Your free toolkit is waiting!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; text-align: center;">
          <h2 style="color: #92400e; margin: 0;">⏰ Don't miss out!</h2>
          <p style="color: #78350f; margin: 10px 0 0 0;">Your conversion toolkit is just one click away</p>
        </div>
        
        <div style="padding: 30px;">
          <p style="font-size: 18px; color: #333;">Hi there! 👋</p>
          
          <p style="color: #666; line-height: 1.6;">
            I noticed you started downloading our ${
              data.leadMagnet || 'toolkit'
            } but didn't complete the process. 
            No worries - it happens to the best of us!
          </p>
          
          <p style="color: #666; line-height: 1.6;">
            This toolkit contains the exact strategies that have helped our clients increase their conversion rates by an average of 240%. 
            It would be a shame to miss out on these proven techniques!
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://webistrydesk.com/?utm_source=abandoned_form&utm_medium=email" 
               style="background: #f59e0b; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
              📥 Get My Free Toolkit Now
            </a>
          </div>
          
          <p style="color: #666; font-size: 14px; line-height: 1.6;">
            <strong>Quick reminder of what you'll get:</strong><br>
            ✅ 25-page conversion optimization guide<br>
            ✅ Psychology triggers that increase sales<br>
            ✅ A/B testing templates<br>
            ✅ Step-by-step implementation checklist
          </p>
          
          <p style="color: #888; font-size: 12px; margin-top: 30px;">
            If you're not interested anymore, no problem! You can ignore this email and we won't bother you about this toolkit again.
          </p>
        </div>
      </div>
    `,
    text: `Hi! You started downloading our toolkit but didn't finish. Get your free conversion optimization guide that's helped clients increase conversions by 240%: https://webistrydesk.com`,
  }),

  high_engagement_followup: (_data: EmailData) => ({
    subject: "🎯 I noticed you're seriously researching solutions...",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1f2937; padding: 30px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 22px;">🎯 Serious About Growth?</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Let's skip the fluff and talk results</p>
        </div>
        
        <div style="padding: 30px;">
          <p style="font-size: 18px; color: #333;">Hi there! 👋</p>
          
          <p style="color: #666; line-height: 1.6;">
            I noticed you've been exploring our website pretty thoroughly - checking out our services, maybe reading some case studies, 
            possibly even looking at pricing. That tells me you're serious about growing your business.
          </p>
          
          <div style="background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 20px; margin: 25px 0;">
            <p style="color: #1e40af; font-weight: bold; margin: 0 0 10px 0;">Here's the thing...</p>
            <p style="color: #374151; margin: 0;">
              Most business owners spend weeks researching solutions, reading guides, and comparing options. 
              But the ones who actually succeed? They take action quickly and work with experts who've done it before.
            </p>
          </div>
          
          <h3 style="color: #333;">What if I told you we could:</h3>
          <ul style="color: #666; line-height: 1.8; padding-left: 20px;">
            <li>Audit your current setup and identify the biggest opportunities</li>
            <li>Create a custom roadmap for YOUR specific business</li>
            <li>Show you exactly what's working for your competitors</li>
            <li>Give you a realistic timeline and budget for results</li>
          </ul>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 30px;">
            <strong>All in a 30-minute call. No sales pitch, no obligation.</strong>
          </p>
          
          <div style="text-align: center; margin: 35px 0;">
            <a href="https://webistrydesk.com/contact?utm_source=engagement_email&utm_campaign=high_engagement" 
               style="background: #3b82f6; color: white; padding: 18px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; font-size: 16px;">
              🚀 Book My Free Strategy Call
            </a>
          </div>
          
          <p style="color: #666; line-height: 1.6; font-size: 14px; font-style: italic;">
            P.S. - I only have 3 spots available this week for these calls. If you're serious about growth, 
            don't wait - they usually fill up fast.
          </p>
        </div>
      </div>
    `,
    text: `Hi! I noticed you've been exploring our website thoroughly. Want to skip the research phase and get a custom roadmap for YOUR business? Book a free 30-minute strategy call: https://webistrydesk.com/contact`,
  }),

  pricing_followup: (_data: EmailData) => ({
    subject: '💰 Questions about pricing? Let me help...',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #065f46; padding: 30px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 22px;">💰 About Those Prices...</h1>
          <p style="margin: 10px 0 0 0; color: #a7f3d0;">Let's talk ROI, not just cost</p>
        </div>
        
        <div style="padding: 30px;">
          <p style="font-size: 18px; color: #333;">Hi there! 👋</p>
          
          <p style="color: #666; line-height: 1.6;">
            I saw you checked out our pricing page. I get it - investing in your website and marketing feels like a big decision. 
            You're probably wondering: "Is this worth it? Will I see results?"
          </p>
          
          <div style="background: #f0fdf4; border-left: 4px solid #22c55e; padding: 20px; margin: 25px 0;">
            <h3 style="color: #166534; margin-top: 0;">Let me put this in perspective...</h3>
            <p style="color: #166534; margin: 0;">
              Our average client sees a 240% increase in conversions within 90 days. 
              If you're getting 100 visitors per month and converting 2%, that's 2 customers. 
              <strong>After optimization? That becomes 6.8 customers.</strong>
            </p>
          </div>
          
          <p style="color: #666; line-height: 1.6;">
            Even if each customer is worth just $500 to you, that's an extra $2,400 in revenue every single month. 
            <strong>The investment pays for itself in the first month.</strong>
          </p>
          
          <h3 style="color: #333;">But here's what I really want you to know:</h3>
          <ul style="color: #666; line-height: 1.8; padding-left: 20px;">
            <li>We don't believe in one-size-fits-all pricing</li>
            <li>Every project starts with understanding YOUR goals and budget</li>
            <li>We can often work in phases to spread out the investment</li>
            <li>Our goal is ROI, not just a pretty website</li>
          </ul>
          
          <div style="background: #fffbeb; border: 1px solid #fed7aa; border-radius: 8px; padding: 20px; margin: 25px 0; text-align: center;">
            <h3 style="color: #92400e; margin-top: 0;">💡 Free Strategy Session</h3>
            <p style="color: #78350f; margin-bottom: 15px;">
              Let's discuss your specific situation and create a custom proposal that fits your budget and goals.
            </p>
            <a href="https://webistrydesk.com/contact?utm_source=pricing_email&utm_campaign=pricing_followup" 
               style="background: #f59e0b; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
              📞 Schedule Free Call
            </a>
          </div>
          
          <p style="color: #666; line-height: 1.6; font-size: 14px;">
            <strong>No obligation, no sales pressure.</strong> Just an honest conversation about what's possible for your business 
            and how we might be able to help you get there.
          </p>
        </div>
      </div>
    `,
    text: `Hi! Saw you checked our pricing. Let's talk ROI: our average client sees 240% conversion increase. Even small improvements pay for themselves quickly. Want to discuss a custom solution? https://webistrydesk.com/contact`,
  }),
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { workflow, triggerData, userEmail } = body;

    if (!workflow || !WORKFLOWS[workflow as keyof typeof WORKFLOWS]) {
      return Response.json({ error: 'Invalid workflow' }, { status: 400 });
    }

    const workflowConfig = WORKFLOWS[workflow as keyof typeof WORKFLOWS];

    // Log workflow trigger (in production, save to database)
    console.log('Marketing automation triggered:', {
      workflow,
      user: userEmail,
      trigger: workflowConfig.trigger,
      data: triggerData,
      timestamp: new Date().toISOString(),
    });

    // Execute workflow sequence
    for (const step of workflowConfig.sequence) {
      if (step.action === 'send_email' && userEmail) {
        const template =
          EMAIL_TEMPLATES[step.template as keyof typeof EMAIL_TEMPLATES];
        if (template) {
          const emailContent = template(triggerData);

          // In production, you'd queue this with proper delay handling
          // For now, we'll simulate immediate execution for demonstration
          console.log('Email queued:', {
            to: userEmail,
            subject: emailContent.subject,
            delay: step.delay,
            template: step.template,
          });

          // Here you would integrate with your email service
          // await queueEmail(userEmail, emailContent, step.delay)
        }
      }
    }

    return Response.json({
      success: true,
      message: `Workflow "${workflowConfig.name}" triggered successfully`,
      steps: workflowConfig.sequence.length,
    });
  } catch (error) {
    console.error('Marketing automation error:', error);
    return Response.json(
      { error: 'Failed to trigger workflow' },
      { status: 500 }
    );
  }
}
