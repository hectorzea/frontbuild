import Link from "next/link";

export default async function ProjectsPage() {
    return (
        <>
            <p>Proyectos</p>

            <Link href={`/projects/tasks`}>Tareas</Link>
        </>
    );
}