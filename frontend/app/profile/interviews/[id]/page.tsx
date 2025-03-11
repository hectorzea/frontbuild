import { getInterviewById, getInterviews } from '@/lib/data';
import { notFound } from 'next/navigation';

export default async function InterviewPage({ params }: { params: { id: string } }) {

    const { id } = await params;
    const interview = await getInterviewById(id);

    // Si no se encuentra la entrevista, mostrar un 404
    if (!interview) {
        notFound();
    }

    return (
        <article>
            <h1>{interview.title}</h1>
            <p>{interview.date}</p>
            <div>{interview.content}</div>
        </article>
    );
}

// Generar rutas estáticas en tiempo de compilación
export async function generateStaticParams() {
    const interviews = await getInterviews();
    return interviews.map((interview) => ({
        id: interview.id,
    }));
}