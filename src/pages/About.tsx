import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import AboutSection from "@/components/AboutSection";

const AboutSectionPage = () => {
  useEffect(() => {
    document.title = "Chi siamo | Edil Vulcano";
  }, []);

  return (
    <PageLayout>
      <AboutSection />
    </PageLayout>
  );
};

export default AboutSectionPage;
