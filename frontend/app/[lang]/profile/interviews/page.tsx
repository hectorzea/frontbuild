
import { getInterviews } from '@/lib/data';
import Link from 'next/link';
import Box from 'ui-box';

export default async function InterviewsPage() {
    // Obtener las entrevistas
    const interviews = await getInterviews();

    return (
        <>
            <Box marginBottom={'10px'} >Entrevistas</Box>
            <Box>
                <ul>
                    {interviews.map((interview) => (
                        <li key={interview.id}>
                            <Link href={`/interviews/${interview.id}`}>
                                <article>
                                    <h2>{interview.title}</h2>
                                    <p>{interview.excerpt}</p>
                                    <small>{interview.date}</small>
                                </article>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Box>
        </> 
    );
}