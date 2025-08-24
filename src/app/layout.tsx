import type { Metadata } from 'next';
import { Merriweather } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  variable: '--font-merriweather',
});

export const metadata: Metadata = {
  title: 'WebistryDesk - R50M+ Revenue Generation | Premium Web Development',
  description:
    "Transform your business with WebistryDesk's proven revenue-generating web solutions. From R15k+ websites to R50M+ e-commerce platforms. 94% client revenue increase guaranteed.",
  keywords:
    'web development, e-commerce, digital marketing, SEO, branding, revenue generation, South Africa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={merriweather.variable}>
      <head>
        {/* Preload critical assets */}
        <link rel="preload" href="/css/fontawesome-all.min.css" as="style" />
        <link rel="preload" href="/images/bg.jpg" as="image" />

        {/* NoScript CSS for template compatibility */}
        <noscript>
          <link rel="stylesheet" href="/css/noscript.css" />
        </noscript>
      </head>
      <body className="is-preload">
        <div id="wrapper" className="fade-in">
          <div className="bg fixed"></div>

          <Header />

          <div id="main">{children}</div>

          <Footer />
        </div>

        {/* Load template JavaScript files */}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.scrollex.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.scrolly.min.js" strategy="afterInteractive" />
        <Script src="/js/browser.min.js" strategy="afterInteractive" />
        <Script src="/js/breakpoints.min.js" strategy="afterInteractive" />
        <Script src="/js/util.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
