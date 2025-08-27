import React from 'react';
import Link from 'next/link';

export default function OrderSuccess() {
  return (
    <main className="min-h-screen bg-white p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4 text-green-700">
        Thank you for your purchase!
      </h1>
      <p className="text-gray-700 mb-8">
        Your order was successful. A confirmation email will be sent to you
        shortly.
      </p>
      <Link href="/shop" className="btn-primary">
        Continue Shopping
      </Link>
    </main>
  );
}
