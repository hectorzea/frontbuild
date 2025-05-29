import Link from "next/link";

export default function ProjectsPage() {
    return (
        <div data-testid="projects-page">
            <p>Proyectos</p>

            <Link href={`/projects/tasks`}>Tareas</Link>
        </div>
    );
}