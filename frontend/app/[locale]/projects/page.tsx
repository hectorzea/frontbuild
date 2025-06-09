import ProjectCard from "@/components/frontbuild/Card";

export default function ProjectsPage() {
    return (
        <div className="flex flex-col p-5" data-testid="projects-page">
            <h3>Proyectos</h3>
            <p className="my-3">Una lista de todos mis proyectos</p>
            <div>
                <ProjectCard />
            </div>
        </div>
    );
}