import IntroCopySection from "@/components/IntroCopySection";
import TornPaperFunnelSection from "@/components/TornPaperFunnelSection";
import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import AnimatedShowcaseSection from "@/components/AnimatedShowcaseSection";
import AboutSection from "@/components/AboutSection";
import ThreeStepSection from "@/components/ThreeStepSection";
import ContactSection from "@/components/ContactSection";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <PageLayout>
      <Seo
        title="Edil Vulcano | Impresa Edile - Preventivo Gratuito"
        description="Edil Vulcano: impresa edile di Livorno Ferraris con squadra di esperienza pluriennale, offre consulenza e preventivo gratuiti in tutto il Nord Italia."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Edil Vulcano Srls",
          url: "https://edil-vulcano.it/",
          image: "https://edil-vulcano.it/logo.webp",
          telephone: "+39 351 457 7039",
          email: "edilvulcanosrl@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Via Galileo Ferraris 37",
            addressLocality: "Livorno Ferraris",
            postalCode: "13046",
            addressRegion: "VC",
            addressCountry: "IT",
          },
          areaServed: "Nord Italia",
        }}
      />
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

