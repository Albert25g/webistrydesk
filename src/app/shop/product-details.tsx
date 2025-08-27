'use client';

import React from 'react';
import { useCart } from '../cart/CartContext';
import { useRouter } from 'next/navigation';

export default function ProductDetails() {
  const { addToCart } = useCart();
  const router = useRouter();
  // For demo, static product data. In a real app, fetch by ID.
  const product = {
    id: 'laptop-1',
    name: 'Sample Laptop',
    price: 19999,
    description:
      'A high-performance laptop for professionals. 16GB RAM, 512GB SSD, Intel i7.',
  };
  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <span className="block font-bold text-brand mb-4">
        R{product.price.toLocaleString()}
      </span>
      <button
        className="btn-primary mb-4"
        onClick={() => addToCart({ ...product, quantity: 1 })}
      >
        Add to Cart
      </button>
      <button className="btn-secondary ml-2" onClick={() => router.back()}>
        Back to Shop
      </button>
    </main>
  );
}
