import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Proof from "@/components/Proof";
import LocationsSection from "@/components/LocationsSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page(){
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <Proof />
        <LocationsSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
