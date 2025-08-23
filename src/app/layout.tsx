import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'https://webistrydesk.com'
  ),
  title: {
    default: 'WebistryDesk - Premium Web Design & Development That Converts',
    template: '%s | WebistryDesk - Web Design Experts',
  },
  description:
    'Transform your business with premium web design and development. We build high-converting websites that drive results and grow revenue. Get your free consultation today!',
  keywords: [
    'web design',
    'web development',
    'website design',
    'custom websites',
    'business websites',
    'e-commerce development',
    'SEO optimization',
    'conversion optimization',
    'responsive design',
    'professional web design',
  ],
  authors: [{ name: 'WebistryDesk Team', url: 'https://webistrydesk.com' }],
  creator: 'WebistryDesk',
  publisher: 'WebistryDesk',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'WebistryDesk',
    title: 'WebistryDesk - Premium Web Design & Development That Converts',
    description:
      'Transform your business with premium web design and development. We build high-converting websites that drive results and grow revenue.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WebistryDesk - Premium Web Design Services',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebistryDesk - Premium Web Design & Development That Converts',
    description:
      'Transform your business with premium web design and development.',
    images: ['/og-image.jpg'],
    creator: '@webistrydesk',
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
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Schema.org Organization Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'WebistryDesk',
              url:
                process.env.NEXT_PUBLIC_BASE_URL || 'https://webistrydesk.com',
              logo: {
                '@type': 'ImageObject',
                url: `${
                  process.env.NEXT_PUBLIC_BASE_URL || 'https://webistrydesk.com'
                }/logo.png`,
                width: 200,
                height: 60,
              },
              description:
                'Premium web design and development services that drive business results',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-555-WEBISTRY',
                contactType: 'Customer Service',
              },
              sameAs: [
                'https://linkedin.com/company/webistrydesk',
                'https://twitter.com/webistrydesk',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}

        {/* Analytics */}
        {process.env.NODE_ENV === 'production' &&
          process.env.NEXT_PUBLIC_GA_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
                }}
              />
            </>
          )}
      </body>
    </html>
  );
}
