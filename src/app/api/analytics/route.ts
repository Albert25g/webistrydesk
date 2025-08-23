import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Analytics tracking endpoint for conversion optimization
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { event, page, data, user_agent } = body;
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    const timestamp = new Date().toISOString();

    // Create analytics record
    const analyticsData = {
      timestamp,
      event,
      page,
      ip,
      user_agent,
      data: data || {},
      session_id: data?.session_id || 'unknown',
    };

    // Log to console for now (replace with your analytics service)
    console.log('🎯 CONVERSION EVENT:', JSON.stringify(analyticsData, null, 2));

    // Special handling for high-value events
    if (
      ['contact_form_submit', 'consultation_book', 'package_select'].includes(
        event
      )
    ) {
      // Send alert to your email for hot leads
      if (process.env.ZOHO_SMTP_HOST) {
        const transporter = nodemailer.createTransporter({
          host: process.env.ZOHO_SMTP_HOST,
          port: Number(process.env.ZOHO_SMTP_PORT || 465),
          secure: true,
          auth: {
            user: process.env.ZOHO_SMTP_USER,
            pass: process.env.ZOHO_SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.MAIL_FROM,
          to: process.env.MAIL_TO,
          subject: `🔥 HOT LEAD ALERT: ${event.toUpperCase()}`,
          html: `
            <h2>🎯 New High-Value Event Detected!</h2>
            <p><strong>Event:</strong> ${event}</p>
            <p><strong>Page:</strong> ${page}</p>
            <p><strong>IP:</strong> ${ip}</p>
            <p><strong>Time:</strong> ${timestamp}</p>
            <p><strong>Data:</strong> ${JSON.stringify(data, null, 2)}</p>
            <p><strong>User Agent:</strong> ${user_agent}</p>
            
            <hr>
            <p><em>Follow up ASAP for maximum conversion!</em></p>
          `,
        });
      }
    }

    // Here you would send to Google Analytics, Mixpanel, PostHog, etc.
    // Example: await mixpanel.track(event, analyticsData);

    return NextResponse.json({
      success: true,
      message: 'Event tracked successfully',
      event_id: `${timestamp}_${event}`,
    });
  } catch (error) {
    console.error('Analytics tracking error:', error);
    return NextResponse.json(
      {
        error: 'Failed to track event',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
