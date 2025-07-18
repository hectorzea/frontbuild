import { JobCheckForm } from "@/components/frontbuild/JobCheckForm";
import React from "react";

export default function ProjectsPage() {
  return (
    <div data-testid="projects-page" className="flex flex-col p-4">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <p>Job linter</p>
        <JobCheckForm />
      </div>
    </div>
  );
}
