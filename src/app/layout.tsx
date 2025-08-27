import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartProvider } from './cart/CartContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'WebistryDesk - Professional Web Development & Digital Services',
  description:
    'Professional web development, e-commerce solutions, and digital marketing services. We build clean, modern websites that work well for your business.',
  keywords:
    'web development, e-commerce, digital marketing, SEO, branding, South Africa',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      {
        url: '/images/tribal-circuit-logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    apple: {
      url: '/images/tribal-circuit-logo.png',
      sizes: '180x180',
      type: 'image/png',
    },
    shortcut: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="font-sans">
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
