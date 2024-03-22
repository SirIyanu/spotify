import { LandingPageHeader } from "../components/Header/LandingPageHeader";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { PricingSection } from "../components/Pricing";
import Footer from "../components/Footer";
export function Landing() {
  return (
    <div id="top page">
      <LandingPageHeader />
      <Hero />
      <Features />
      <PricingSection />
      <Footer />
    </div>
  );
}
