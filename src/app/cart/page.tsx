'use client';

import { useCart } from './CartContext';
import Link from 'next/link';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function Cart() {
  const { items, removeFromCart, clearCart } = useCart();
  const total = items.reduce(
    (sum: number, item: CartItem) => sum + item.price * item.quantity,
    0
  );
  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <p className="text-gray-700 mb-8">
        {items.length === 0
          ? 'Your cart is empty.'
          : 'Review your selected products below.'}
      </p>
      {items.length === 0 ? (
        <div className="border rounded-lg p-4 text-center text-gray-500">
          Your cart is empty.
        </div>
      ) : (
        <div className="space-y-4 mb-8">
          {items.map((item: CartItem) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 flex items-center justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <span className="text-gray-600">Qty: {item.quantity}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-brand">
                  R{(item.price * item.quantity).toLocaleString()}
                </span>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex flex-col md:flex-row justify-between items-center border-t pt-4 mt-4 gap-4">
            <div className="flex items-center gap-4">
              <span className="font-bold text-lg">Total:</span>
              <span className="font-bold text-brand text-lg">
                R{total.toLocaleString()}
              </span>
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
              <Link href="/order-summary" className="btn-primary text-center">
                Checkout
              </Link>
              <button className="btn-primary ml-2" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
