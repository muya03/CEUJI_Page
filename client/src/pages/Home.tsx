import { GlassHeader } from "@/components/GlassHeader";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { SatelliteCallout } from "@/components/SatelliteCallout";
import { TransparencySection } from "@/components/TransparencySection";
import { NewsSection } from "@/components/NewsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-uji-dark selection:bg-uji-base selection:text-white">
      <GlassHeader />
      
      <main>
        <Hero />
        <BentoGrid />
        <TransparencySection />
        <SatelliteCallout />
        <NewsSection />
      </main>
      
      <Footer />
    </div>
  );
}
