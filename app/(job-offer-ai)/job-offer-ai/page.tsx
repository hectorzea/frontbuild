import { JobSearchForm } from "@/components/frontbuild/JobSearchForm";
import MockServiceWorkerWrapper from "@/components/frontbuild/MockServiceWorkerWrapper";

export default function ProjectsPage() {
  return (
    <div data-testid="projects-page" className="flex flex-col p-4">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <MockServiceWorkerWrapper>
          <JobSearchForm />
        </MockServiceWorkerWrapper>
      </div>
    </div>
  );
}
