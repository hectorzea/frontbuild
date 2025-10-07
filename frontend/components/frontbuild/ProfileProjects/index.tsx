import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Task Generator",
    description:
      "A simple task generator using the best practices of redux toolkit + jest",
    link: "/projects/tasks",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Job Lint",
    description:
      "A job linting tool that helps to filter job description using an API endpoint with AI and return just the useful details",
    link: "/projects/job-check",
    technologies: ["React", "Firebase", "TypeScript", "Material-UI"],
  },
  {
    title: "Hearthstone Card Search",
    description:
      "Simple card search for Hearthstone Game using Hearthstone JSON API",
    link: "/projects/hs-card-search",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Mulligan Generator",
    description: "Mulligan generator for hearthstone games",
    link: "/projects/hs-card-search/mulligan",
    technologies: ["Node.js", "React", "OpenAPI", "Express", "Puppeteer"],
  },
];

export function ProfileProjects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-6 md:px-12 py-20"
    >
      <div className="max-w-4xl w-full">
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">
          Projects
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="group p-6 rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-xl font-semibold group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
