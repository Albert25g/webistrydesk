'use client';

import React, { useState } from 'react';
import { useCart } from '../cart/CartContext';
import Link from 'next/link';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function OrderSummary() {
  const { items } = useCart();
  const orderTotal = items.reduce(
    (sum: number, item: OrderItem) => sum + item.price * item.quantity,
    0
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStripeCheckout = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || 'Failed to create Stripe session.');
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'An error occurred.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-4">Order Summary</h1>
      {items.length === 0 ? (
        <div className="border rounded-lg p-4 text-center text-gray-500">
          Your cart is empty.{' '}
          <Link href="/shop" className="text-brand underline">
            Shop now
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-8">
            {items.map((item: OrderItem) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 flex items-center justify-between"
              >
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <span className="text-gray-600">Qty: {item.quantity}</span>
                </div>
                <span className="font-bold text-brand">
                  R{(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center border-t pt-4 mt-4">
            <span className="font-bold text-lg">Total:</span>
            <span className="font-bold text-brand text-lg">
              R{orderTotal.toLocaleString()}
            </span>
          </div>
          <div className="mt-8 flex gap-4 flex-col md:flex-row">
            <Link href="/cart" className="btn-secondary">
              Back to Cart
            </Link>
            <button
              className="btn-primary"
              onClick={handleStripeCheckout}
              disabled={loading}
            >
              {loading ? 'Redirecting...' : 'Proceed to Payment (Stripe)'}
            </button>
          </div>
          {error && (
            <div className="mt-4 p-3 rounded bg-red-100 text-red-800 border border-red-300">
              {error}
            </div>
          )}
        </>
      )}
    </main>
  );
}
