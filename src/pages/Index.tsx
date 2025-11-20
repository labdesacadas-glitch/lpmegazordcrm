"use client";
import { LandingHeader } from "@/components/LandingHeader";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { FutureVisionSection } from "@/components/FutureVisionSection";
import { CoreComponentsSection } from "@/components/CoreComponentsSection";
import { FeaturesVideoSection } from "@/components/FeaturesVideoSection";
import { UniqueSellingPoints } from "@/components/UniqueSellingPoints";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ReasonsToStartSection } from "@/components/ReasonsToStartSection";
import { PricingSection } from "@/components/PricingSection";
import { ValueStackSection } from "@/components/ValueStackSection";
import { ConsequenceSection } from "@/components/ConsequenceSection";
import { FaqSection } from "@/components/FaqSection";
import { LandingFooter } from "@/components/LandingFooter";
import { WhatsappFloatingWidget } from "@/components/WhatsappFloatingWidget"; // Importando o novo widget

const Index = () => {
  return (
    // Enforce dark mode for the entire landing page
    <div className="dark min-h-screen bg-background text-foreground">
      <LandingHeader />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <FutureVisionSection />
        <CoreComponentsSection />
        <FeaturesVideoSection />
        <UniqueSellingPoints />
        <TestimonialsSection />
        <ReasonsToStartSection />
        <PricingSection />
        <ValueStackSection />
        <ConsequenceSection />
        <FaqSection />
      </main>
      <LandingFooter />
      <WhatsappFloatingWidget /> {/* Adicionando o widget flutuante */}
    </div>
  );
};

export default Index;