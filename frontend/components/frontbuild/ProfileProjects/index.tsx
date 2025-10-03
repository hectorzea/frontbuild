import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
    link: "https://github.com",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, team workspaces, and advanced filtering capabilities.",
    link: "https://github.com",
    technologies: ["React", "Firebase", "TypeScript", "Material-UI"],
  },
  {
    title: "Developer Portfolio Template",
    description:
      "Open-source portfolio template for developers with dark mode, MDX blog, and project showcase.",
    link: "https://github.com",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "API Documentation Generator",
    description:
      "Automated tool for generating beautiful API documentation from OpenAPI specifications with interactive examples.",
    link: "https://github.com",
    technologies: ["Node.js", "React", "OpenAPI", "Express"],
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
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
