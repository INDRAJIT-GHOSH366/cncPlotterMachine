import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import LineWaves from "../components/LineWaves";
import FeatureSection from "../components/FeatureSection";
import HowItWorks from "../components/HowItWorks";
import DashboardPreview from "../components/DashboardPreview";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function Home() {
  return (
    <div className="relative w-full min-h-screen bg-black">
      <div className="fixed inset-0 pointer-events-none">
        <LineWaves
          speed={0.3}
          innerLineCount={32}
          outerLineCount={36}
          warpIntensity={1}
          rotation={-45}
          edgeFadeWidth={0}
          colorCycleSpeed={1}
          brightness={0.2}
          color1="#1D0050"
          color2="#877889"
          color3="#ffffff"
        />
      </div>

      <div className="absolute top-5 left-5 right-5 z-[9999]">
        <Nav />
      </div>

      <div className="relative z-10">
        <Hero />
        <FeatureSection />
        <HowItWorks />
        <DashboardPreview />
        <CTASection />
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
}

export default Home;
