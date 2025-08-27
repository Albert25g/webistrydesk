import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-07-30.basil',
});

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json();
    const line_items = items.map((item: any) => ({
      price_data: {
        currency: 'zar',
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100, // Stripe expects cents
      },
      quantity: item.quantity,
    }));
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${req.nextUrl.origin}/order-success`,
      cancel_url: `${req.nextUrl.origin}/order-summary`,
    });
    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
