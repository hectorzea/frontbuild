import ProjectCard from "@/components/frontbuild/Card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Task Generator",
    subtitle:
      "A simple task generator using the best practices of redux toolkit + jest",
    stack: ["Next.js", "Redux Toolkit", "Jest", "Tailwind CSS"],
    testingApproach: ["Unit Tests", "Integration Tests", "E2E Tests"],
    motivation:
      "Having a simple app but robust with CI/CD, applying testing pyramid principles and using server components / client components",
    link: "/projects/tasks",
  },
  {
    title: "Job Lint",
    subtitle:
      "A job linting tool that helps to filter job description using an API endpoint with AI and return just the useful details",
    stack: ["Next.js", "Jest", "Tailwind CSS"],
    testingApproach: ["Unit Tests", "Integration Tests", "E2E Tests"],
    motivation:
      "Sometimes job descriptions are too long and have a lot of unnecessary information, this tool helps to filter the job description and return just the useful details",
    link: "/projects/job-check",
  },
  {
    title: "Hearthstone Card Finder",
    subtitle: "Simple card finder for Hearthstone using the official API",
    stack: ["Next.js", "Jest", "Tailwind CSS"],
    testingApproach: ["Unit Tests", "Integration Tests", "E2E Tests"],
    motivation:
      "Some of the pages that uses HS API are not very well designed, this tool helps to find cards and see their details in a simple way",
    link: "/projects/hs-card-finder",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col p-5" data-testid="projects-page">
      <div className="flex items-center my-3">
        <Button
          variant={"link"}
          asChild
          className="hover:text-gray-300 transition-colors duration-200 p-0"
        >
          <Link href={"/profile/skills"}>
            <ArrowLeft size={"20"} />
            <p className="text-lg">Go back to my profile</p>
          </Link>
        </Button>
      </div>
      <h1 className="text-2xl">Proyectos</h1>
      <p className="text-xl my-3">Una lista de todos mis proyectos</p>
      <div className="flex flex-col gap-6 md:flex-row">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
}
