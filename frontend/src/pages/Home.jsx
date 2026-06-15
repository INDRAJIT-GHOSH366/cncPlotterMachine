import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import LineWaves from "../components/LineWaves";
import FeatureSection from "../components/FeatureSection";
import HowItWorks from "../components/HowItWorks";
import DashboardPreview from "../components/DashboardPreview";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
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

      {/* Navbar */}
      <div className="sticky top-0 z-50 px-5 pt-5">
        <Nav />
      </div>

      {/* Content */}
      <main className="relative z-10">
        <Hero />
        <FeatureSection />
        <HowItWorks />
        <DashboardPreview />
        <CTASection />
        <Footer />
      </main>

    </div>
  );
}

export default Home;