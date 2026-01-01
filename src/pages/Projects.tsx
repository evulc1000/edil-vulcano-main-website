import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import ProjectsSection from "@/components/ProjectsSection";

const ProjectsSectionPage = () => {
  useEffect(() => {
    document.title = "Progetti | Edil Vulcano";
  }, []);

  return (
    <PageLayout>
      <ProjectsSection />
    </PageLayout>
  );
};

export default ProjectsSectionPage;
