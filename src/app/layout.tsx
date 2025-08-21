import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WebistryDesk',
  description: 'Minimal blank page.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#bfeffd" />
      </head>
      <body style={{ background: '#bfeffd' }}>
        {children}
      </body>
    </html>
  );
}
