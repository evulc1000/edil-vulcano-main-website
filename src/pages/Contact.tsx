import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import ContactSection from "@/components/ContactSection";

const ContactSectionPage = () => {
  useEffect(() => {
    document.title = "Contatti | Edil Vulcano";
  }, []);

  return (
    <PageLayout>
      <ContactSection />
    </PageLayout>
  );
};

export default ContactSectionPage;
