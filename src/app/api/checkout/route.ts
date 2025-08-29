import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { verifyIdToken } from '@/lib/firebaseAdmin';

// Type definitions
interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

type DecodedIdToken = {
  uid: string;
  email?: string | null;
  [k: string]: unknown;
};

function getStripeInstance() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key, { apiVersion: '2025-08-27.basil' });
}

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripeInstance();
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe not configured' },
        { status: 500 }
      );
    }

    // Require Authorization: Bearer <ID_TOKEN>
    const authHeader = req.headers.get('authorization') || '';
    const idToken = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';
    if (!idToken) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let decodedToken: DecodedIdToken | null = null;
    try {
      decodedToken = await verifyIdToken(idToken);
    } catch {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    const body = (await req.json()) as { items?: CartItem[] };
    const items = body.items ?? [];

    const line_items = items.map((item: CartItem) => ({
      price_data: {
        currency: 'zar',
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100, // Stripe expects cents
      },
      quantity: item.quantity,
    }));

    const session: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${req.nextUrl.origin}/order-success`,
        cancel_url: `${req.nextUrl.origin}/order-summary`,
        metadata: {
          uid: decodedToken?.uid || '',
          email: decodedToken?.email || '',
        },
      });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
