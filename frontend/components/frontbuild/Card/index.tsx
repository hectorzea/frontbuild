import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'

const ProjectCard = () => {
    return (
        <Card className='w-80 bg-neutral-900'>
            <CardHeader>
                <CardTitle>Task Generator</CardTitle>
            </CardHeader>
            <CardContent>
                <p>A simple task generator using the best practices of redux toolkit + jest</p>
            </CardContent>
            <CardFooter>
                <Link href={`/projects/tasks`}>Go to project</Link>
            </CardFooter>
        </Card>
    )
}

export default ProjectCard