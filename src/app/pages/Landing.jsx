import { LandingPageHeader } from "../components/Header/LandingPageHeader";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { PricingSection } from "../components/Pricing";
export function Landing() {
  return (
    <div>
      <LandingPageHeader />
      <Hero />
      <Features />
      <PricingSection />
    </div>
  );
}
