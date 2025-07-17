import { JobCheckForm } from "@/components/frontbuild/JobCheckForm";
import React from "react";

export default function ProjectsPage() {
  return (
    <div data-testid="projects-page" className="flex flex-col p-4">
      <p>Job linter</p>
      <JobCheckForm />
    </div>
  );
}
