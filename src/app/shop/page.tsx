'use client';

import React from 'react';
import { useCart } from '../cart/CartContext';
import Link from 'next/link';

export default function Shop() {
  const { addToCart } = useCart();
  const sampleProduct = {
    id: 'laptop-1',
    name: 'Sample Laptop',
    price: 19999,
    quantity: 1,
  };
  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-4">Tech Shop</h1>
      <p className="text-gray-700 mb-8">
        Browse and purchase the latest laptops, gadgets, and tech accessories.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">{sampleProduct.name}</h2>
          <p className="text-gray-600 mb-2">
            High-performance laptop for professionals.
          </p>
          <span className="block font-bold text-brand mb-2">
            R{sampleProduct.price.toLocaleString()}
          </span>
          <div className="flex gap-2">
            <button
              className="btn-primary flex-1"
              onClick={() => addToCart(sampleProduct)}
            >
              Add to Cart
            </button>
            <Link
              href="/shop/product-details"
              className="btn-secondary flex-1 text-center"
            >
              View Details
            </Link>
          </div>
        </div>
        {/* Add more product cards here */}
      </div>
    </main>
  );
}
