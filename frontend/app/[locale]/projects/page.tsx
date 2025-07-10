import ProjectCard from "@/components/frontbuild/Card";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col p-5" data-testid="projects-page">
      <h1 className="text-2xl">Proyectos</h1>
      <p className="text-xl my-3">Una lista de todos mis proyectos</p>
      <div className="flex flex-col gap-6 md:flex-row">
        <ProjectCard />
      </div>
    </div>
  );
}
