import { useTranslations } from "next-intl";

const experiences = [
  {
    id: "friday_insurance",
    period: "2022 - 2025",
    title: "Ingeniero de Software",
    company: "FRIDAY Insurance",
    location: "Berlin, Alemania",
    description:
      "Desarrollo de nuevas funcionalidades y mantenimiento de aplicaciones SPA (self service portal & claim creation) ",
    technologies: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "TypeScript",
      "CSS",
      "GitLab",
      "Grafana",
      "Sentry",
      "Playwright",
    ],
  },
  {
    id: "eventbrite",
    period: "2021 - 2022",
    title: "Ingeniero de Software",
    company: "Eventbrite",
    location: "San Francisco, CA",
    description: "Mejorar y mantener SPA de creacíon de eventos globales.",
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Jest",
      "React Testing Library",
      "Sentry",
    ],
  },
  {
    id: "camonapp",
    period: "2020 - 2021",
    title: "Ingeniero Frontend",
    company: "CamonApp",
    location: "Argentina",
    description:
      "Desarrollo de SPA para monitorear creación de experiencias, mantenimiento de APIS",
    technologies: ["React", "Redux", "ChartJS", "AWS", "Express"],
  },
  {
    id: "inclusion_cloud",
    period: "2016 - 2020",
    title: "Desarrollador Frontend",
    company: "Inclusion Cloud",
    location: "Argentina",
    description:
      "Desarrollo y mantenimiento SPA's internas usando React, SAP Cloud Platform y UI5",
    technologies: [
      "JavaScript",
      "React",
      "SAP Cloud Platform (SCP)",
      "Fiori",
      "UI5",
    ],
  },
];

export function ProfileExperience() {
  const t = useTranslations("HomePage.experience");
  const translatedExperience = experiences.map((item) => ({
    ...item,
    title: t(`${item.id}_title`),
    description: t(`${item.id}_description`),
  }));
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center px-6 md:px-12 py-20"
    >
      <div className="max-w-4xl w-full">
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">
          Experience
        </h3>
        <div className="space-y-12">
          {translatedExperience.map((exp, index) => (
            <div key={index} className="group">
              <div className="flex flex-col md:flex-row md:gap-8">
                <div className="md:w-48 flex-shrink-0 mb-2 md:mb-0">
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-1 group-hover:text-accent transition-colors">
                    {exp.title}
                  </h4>
                  <p className="text-foreground mb-3">{exp.company}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs text-accent rounded-full bg-slate-600 dark:bg-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
