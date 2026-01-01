import { useEffect } from "react";
import IntroCopySection from "@/components/IntroCopySection";
import TornPaperFunnelSection from "@/components/TornPaperFunnelSection";
import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import AnimatedShowcaseSection from "@/components/AnimatedShowcaseSection";
import AboutSection from "@/components/AboutSection";
import ThreeStepSection from "@/components/ThreeStepSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  useEffect(() => {
    document.title = "Edil Vulcano | Impresa Edile - Preventivo Gratuito";
  }, []);

  return (
    <PageLayout>
      <HeroSection />
      <IntroCopySection />
      <TornPaperFunnelSection />
      <AboutSection />
      <ThreeStepSection /> 
      <AnimatedShowcaseSection />
      <ContactSection />
    </PageLayout>
  );
};

export default Index;

