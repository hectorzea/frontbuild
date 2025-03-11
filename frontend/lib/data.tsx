export type Interview = {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
};

// Simulación de una API o base de datos
const mockInterviews: Interview[] = [
    {
        id: '1',
        title: 'Entrevista con Jane Doe',
        date: '2023-10-01',
        excerpt: 'Hablamos sobre su carrera y proyectos recientes.',
        content: 'Este es el contenido completo de la entrevista con Jane Doe...',
    },
    {
        id: '2',
        title: 'Entrevista con John Smith',
        date: '2023-10-05',
        excerpt: 'Discutimos su enfoque en la innovación tecnológica.',
        content: 'Este es el contenido completo de la entrevista con John Smith...',
    },
];

// Obtener todas las entrevistas
export async function getInterviews(): Promise<Interview[]> {
    // Simulamos un retraso de red
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return mockInterviews;
}

// Obtener una entrevista por ID
export async function getInterviewById(id: string): Promise<Interview | undefined> {
    const interviews = await getInterviews();
    return interviews.find((interview) => interview.id === id);
}