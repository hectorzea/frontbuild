// import { getInterviewById, getInterviews } from '@/lib/data';
// import { notFound } from 'next/navigation';

export default async function InterviewPage() {


    // const interview = await getInterviewById(id);

    // // Si no se encuentra la entrevista, mostrar un 404
    // if (!interview) {
    //     notFound();
    // }

    return (
        <article>
            SSS
        </article>
    );
}

// // Generar rutas estáticas en tiempo de compilación
// export async function generateStaticParams() {
//     const interviews = await getInterviews();
//     return interviews.map((interview) => ({
//         id: interview.id,
//     }));
// }