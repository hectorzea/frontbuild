import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const projects = [
  {
    id: "task_generator",
    title: "Task Generator",
    description:
      "A simple task generator using the best practices of redux toolkit + jest",
    link: "/tasks",
    technologies: ["Next.js", "Playwright", "MongoDB", "Tailwind CSS"],
  },
  {
    id: "job_lint",
    title: "Job Lint",
    description:
      "A job linting tool that helps to filter job description using an API endpoint with AI and return just the useful details",
    link: "/projects/job-check",
    technologies: ["Next.js", "MongoDB", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "hearthstone_card_search",
    title: "Hearthstone Card Search",
    description:
      "Simple card search for Hearthstone Game using Hearthstone JSON API",
    link: "/projects/hs-card-search",
    technologies: ["Next.js", "Typescript", "Shadcn", "Tailwind CSS"],
  },
  {
    id: "mulligan_generator",
    title: "Mulligan Generator",
    description: "Mulligan generator for hearthstone games",
    link: "/projects/hs-card-search/mulligan",
    technologies: ["Node.js", "React", "NestJS", "Puppeteer"],
  },
];

export function ProfileProjects() {
  const t = useTranslations("HomePage.projects");
  const translatedProjects = projects.map((item) => ({
    ...item,
    title: t(`${item.id}_title`),
    description: t(`${item.id}_description`),
  }));
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-6 md:px-12 py-20"
    >
      <div className="max-w-4xl w-full">
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">
          {t("title")}
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          {translatedProjects.map((project, index) => (
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
