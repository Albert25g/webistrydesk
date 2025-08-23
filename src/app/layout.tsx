import './globals.css';
import Header from '@/components/zerofour/Header';

export const metadata = {
  title: 'WebistryDesk',
  description: 'Minimal blank page.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
