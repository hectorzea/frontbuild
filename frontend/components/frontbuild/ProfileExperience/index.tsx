const experiences = [
  {
    period: "2022 - 2025",
    title: "Ingeniero de Software",
    company: "FRIDAY Insurance",
    location: "Berlin, Alemania",
    description:
      "Desarrollé y mantuve apps React con Next.js, Redux, TS, CSS. Aseguré calidad con CI/CD, Grafana, Sentry y Playwright. Colaboré con UX.",
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
    period: "2021 - 2022",
    title: "Ingeniero de Software",
    company: "Eventbrite (Remoto)",
    location: "San Francisco, CA",
    description:
      "Mejoré el portal con React, TS y Redux. Apliqué TDD con Jest y React Testing Library. Monitoricé con Sentry y resolví errores.",
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
    period: "2020 - 2021",
    title: "Ingeniero Frontend",
    company: "CamonApp",
    location: "Argentina",
    description:
      "Desarrollé vistas e interfaces con React, Redux y Context. Integré backend en AWS con Express, colaborando con diseñadores.",
    technologies: ["React", "Redux", "Context", "AWS", "Express"],
  },
  {
    period: "2016 - 2020",
    title: "Desarrollador Frontend",
    company: "Inclusion Cloud",
    location: "Argentina",
    description:
      "Creé vistas e interfaces para clientes con tecnologías frontend modernas. Usé SAP como backend y desarrollé con SAP Cloud Platform.",
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
          {experiences.map((exp, index) => (
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
                        className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full"
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
