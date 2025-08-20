import HeroSection from '../components/ui/HeroSection';
import ServicesSection from '../components/ui/ServicesSection';
import AboutSection from '../components/ui/AboutSection';
import LocationsSection from '../components/ui/LocationsSection';
import CTABanner from '../components/ui/CTABanner';
import SiteFooter from '../components/ui/SiteFooter';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white font-inter">
      <HeroSection />
      <ServicesSection />
      <LocationsSection />
      <AboutSection />
      <CTABanner />
      <SiteFooter />
    </main>
  );
}
