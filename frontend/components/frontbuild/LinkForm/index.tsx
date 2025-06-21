"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { GoogleGenAI } from "@google/genai"
import axios from "axios"
import { useState } from "react"
import Link from "next/link"
import { ArrowBigRight } from "lucide-react"
import { set } from "ui-box/dist/src/cache"

const FormSchema = z.object({
    linkedInJobUrl: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export function InputForm() {
    const [data, setData] = useState<any>(null);
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            linkedInJobUrl: "",
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            console.log('API call initiated');
            const jobResponse = await axios.post(`http://localhost:3000/ai/process-job`, { linkedinJobUrl: data.linkedInJobUrl });
            setData(jobResponse.data);
        } catch (error) {
            console.error('Error calling google api cloud:', error);
        }
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="linkedInJobUrl"
                        render={({ field }) => (
                            <FormItem className="mt-2">
                                <FormLabel>Please, enter linkedIN job URL to initiate the lint</FormLabel>
                                <FormControl>
                                    <Input placeholder="https://www.linkedin.com/jobs/view/123456789/" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="mt-4">Submit</Button>
                </form>
            </Form>
            {data ?
                <div className="mt-4">
                    <h3 className="text-2xl font-semibold mb-3">
                        Job Information
                    </h3>
                    <div className="flex flex-row gap-2 items-center justify-between">
                        <div>Company: {data?.companyName}</div>
                        <Button size={'sm'} data-testid={'download-cv-button'} className="">
                            <Link
                                href={data?.jobLink}
                                target="_blank"
                                aria-label="Go to job"
                            >Apply
                            </Link>
                            <ArrowBigRight />
                        </Button>
                    </div>
                    <div>Job Title: {data?.jobTitle}</div>
                    <div>Job Description: {data?.jobDescription}</div>
                    <div>Years of Experience: {data?.yearsOfExperience}</div>
                    <div className="mt-3">
                        Hard Skills
                    </div>
                    <ul className="max-w-md space-y-1 list-disc list-inside">
                        {data?.hardSkills?.map((skill: string, index: number) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                    <div className="mt-3">
                        Soft Skills
                    </div>
                    <ul className="max-w-md space-y-1 list-disc list-inside">
                        {data?.softSkills?.map((skill: string, index: number) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                    <div className="mt-3">Salary Range: {data?.salaryRange}</div>
                    <h3 className="text-2xl font-semibold mt-3">
                        Location / Work Model
                    </h3>
                    <div>Work Environment: {data?.workEnvironment}</div>
                    <div>Location: {data?.location}</div>
                    <div>Allow Relocation: {data?.allowRelocation ? 'yes' : 'no'}</div>
                    <h3 className="text-2xl font-semibold mt-3">
                        Recruitment Process Steps
                    </h3>
                    <ul className="max-w-md space-y-1 list-disc list-inside text-muted-foreground">
                        {data?.recruitmentProcessSteps?.map((skill: string, index: number) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                    <h3 className="text-2xl font-semibold mt-3">
                        Considerations about the job (IA)
                    </h3>
                    <div>How to fit better?:{data?.considerations}</div>
                    <div>Match %: {data?.matchPercentage}</div>
                    <div>Match Reasoning: {data?.matchReasoning}</div>
                </div> : <div className="mt-4">No data submitted yet</div>}
        </>
    )
}
