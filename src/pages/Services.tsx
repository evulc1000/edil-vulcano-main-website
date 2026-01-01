import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import ServicesSection from "@/components/ServicesSection";

const ServicesSectionPage = () => {
  useEffect(() => {
    document.title = "Servizi | Edil Vulcano";
  }, []);

  return (
    <PageLayout>
      <ServicesSection />
    </PageLayout>
  );
};

export default ServicesSectionPage;
