import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('../components/ui/HeroSection'), {
  ssr: false,
});
const ServicesSection = dynamic(
  () => import('../components/ui/ServicesSection'),
  { ssr: false }
);
const AboutSection = dynamic(() => import('../components/ui/AboutSection'), {
  ssr: false,
});
const CTABanner = dynamic(() => import('../components/ui/CTABanner'), {
  ssr: false,
});
const SiteFooter = dynamic(() => import('../components/ui/SiteFooter'));

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white font-inter">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CTABanner />
      <SiteFooter />
    </main>
  );
}
