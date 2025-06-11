"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { GoogleGenAI } from "@google/genai"
import axios from "axios"

const FormSchema = z.object({
    linkedInJobUrl: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export function InputForm() {
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
        const jobDataStructure = "Dado este HTML completo de una URL de publicacion de trabajo, extrae la informacion mas importante y devuelve un JSON (los nombres de los atributos del json tienen relacion con la informacion, tomalo como referencia tambien para el calculo final), retorna null los atributos que no puedas llenar, a continuacion el JSON: ";
        const jobJsonStructure = "{allowRelocation:boolean, recruitmentProcessSteps:string[], jobLink:string, companyName:string, considerations:string, hardSkills:string[], jobDescription:string, jobTitle:string, location:string, benefits:string[], softSkills:string[], teamSize:number, workEnvironment:string, workModel:string}";
        //todo esto seria una api call al scrapper asincrona que devolveria la info en exto
        // const jobDescription = "jobdescription";
        const textContent = `${jobDataStructure} ${jobJsonStructure} HTML: ${jobRawHtml}`;
        try {
            const ai = new GoogleGenAI({ apiKey: "" });
            const response = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: textContent
            });
            const jobDetails = extractJson(response.text);
            console.log(jobDetails)
        }
        catch (error) {
            console.error('Error calling google api cloud:', error);
        }
    }

    return (
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
    )
}
