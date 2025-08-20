import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import Stats from "@/components/Stats";
import LocationsSection from "@/components/LocationsSection";

export default function Page(){
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Section title="Why WebistryDesk" subtitle="Premium build, honest speed, AI-ready.">
          <div className="grid md:grid-cols-3 gap-5">
            <FeatureCard title="Premium UX" desc="Minimal base with luxurious accents. Trustworthy and modern." />
            <FeatureCard title="Performance" desc="Next.js + edge optimizations + clean code. Fast where it matters." />
            <FeatureCard title="AI Ready" desc="Analytics and optional AI components to scale smarter." />
          </div>
        </Section>
        <Section title="Proof" subtitle="Outcomes we care about: reliability, speed, clarity.">
          <Stats />
        </Section>
        <LocationsSection />
      </main>
      <Footer />
    </>
  );
}