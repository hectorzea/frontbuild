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

const FormSchema = z.object({
    linkedInJobUrl: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export function InputForm() {
    const [data, setData] = useState<any>(null);
    const extractJson = (textWithDelimiters: any) => {
        const jsonString = textWithDelimiters
            .replace(/^```json\n/, '')
            .replace(/\n```$/, '')
            .trim();

        try {
            // Intentar parsear el JSON
            const jsonObject = JSON.parse(jsonString);
            return jsonObject;
        } catch (error) {
            console.error('Error parsing JSON:', error);
            return null; // O lanzar el error, según lo que prefieras
        }
    }
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            linkedInJobUrl: "",
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log('API call initiated');
        console.log(data.linkedInJobUrl);
        // const jobDataStructure = "respondeme con un json con esta estructura de esta publicacion de trabajo con lo mas importante pero solo con esta estructura "
        const jobResponse = await axios.get(`http://localhost:3000/job-extractor?url=${data.linkedInJobUrl}`);
        const jobRawHtml = jobResponse.data?.content;
        const jobDataStructure = "Dado este HTML completo de una URL de publicacion de trabajo, extrae la informacion mas importante y devuelve un JSON";
        const jsonConsiderations = "los nombres de los atributos del json tienen relacion con la informacion, tomalo como referencia tambien para el calculo final), retorna null los atributos que no puedas llenar. el campo salaryRange que sea en euros el rango. el campo considerations tienes que llenarlo tu con lo que crees que es importante investigar / aprender para encajar mejor en el trabajo. el campo jobDescription que sea una informacion mas resumida (corta) de lo que hacen, a continuacion el JSON:"
        const jobJsonStructure = "{allowRelocation:boolean, yearsOfExperience:string ,salaryRange:string, recruitmentProcessSteps:string[], jobLink:string, companyName:string, considerations:string, hardSkills:string[], jobDescription:string, jobTitle:string, location:string, softSkills:string[], teamSize:number, workEnvironment:string";
        //todo esto seria una api call al scrapper asincrona que devolveria la info en exto
        // const jobDescription = "jobdescription";
        const textContent = `${jobDataStructure} ${jsonConsiderations} ${jobJsonStructure} HTML: ${jobRawHtml}`;
        try {
            const ai = new GoogleGenAI({ apiKey: "" });
            const response = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: textContent
            });
            const jobDetails = extractJson(response.text);
            console.log(jobDetails)
            setData(jobDetails);
        }
        catch (error) {
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
                            <FormItem>
                                <FormLabel>LinkedIN Job URL</FormLabel>
                                <FormControl>
                                    <Input placeholder="https://www.linkedin.com/jobs/view/123456789/" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
            <div>
                <div>Company: {data?.companyName}</div>
                <h3 className="text-2xl font-semibold">
                    General Information
                </h3>
                <div>Job Title: {data?.jobTitle}</div>
                <div>Years of Experience: {data?.yearsOfExperience}</div>
                <div className="">
                    Hard Skills
                </div>
                <ul className="max-w-md space-y-1 list-disc list-inside text-muted-foreground">
                    {data?.hardSkills?.map((skill: string, index: number) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <div className="">
                    Soft Skills
                </div>
                <ul className="max-w-md space-y-1 list-disc list-inside text-muted-foreground">
                    {data?.softSkills?.map((skill: string, index: number) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <div>Salary Range: {data?.salaryRange}</div>
                <div>Job Description: {data?.jobDescription}</div>
                <h3 className="text-2xl font-semibold">
                    Location / Work Model
                </h3>
                <div>Work Environment: {data?.workEnvironment}</div>
                <div>Location: {data?.location}</div>
                <div>Allow Relocation: {data?.allowRelocation ? 'yes' : 'no'}</div>
                <h3 className="text-2xl font-semibold">
                    Considerations about the job
                </h3>
                <div>{data?.considerations}</div>
                <h3 className="text-2xl font-semibold">
                    Recruitment Process Steps
                </h3>
                <ul className="max-w-md space-y-1 list-disc list-inside text-muted-foreground">
                    {data?.recruitmentProcessSteps?.map((skill: string, index: number) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <div>Job Link: {data?.jobLink}</div>
            </div>
        </>
    )
}
