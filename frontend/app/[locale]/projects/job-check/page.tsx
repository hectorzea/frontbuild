"use client"
import { Button } from "@/components/ui/button";
import { GoogleGenAI } from "@google/genai";
import React from "react";

export default function ProjectsPage() {
    const [data, setData] = React.useState<any>(null);
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

    const callApi = async () => {
        console.log('API call initiated');
        const jobDataStructure = "respondeme con un json con esta estructura de esta publicacion de trabajo con lo mas importante pero solo con esta estructura "
        const jobJsonStructure = "{allowRelocation:boolean, considerations:string, hardSkills:string[], jobDescription:string, jobTitle:string, location:string, benefits:string[], softSkills:string[], teamSize:number, workEnvironment:string, workModel:string}";
        //todo esto seria una api call al scrapper asincrona que devolveria la info en exto
        const jobDescription = "jobdescription";
        const textContent = `${jobDataStructure} ${jobJsonStructure} ${jobDescription}`
        try {
            // const ai = new GoogleGenAI({ apiKey: "" });
            // const response = await ai.models.generateContent({
            //     model: "gemini-2.0-flash",
            //     contents: textContent
            // });
            // const jobDetails = extractJson(response.text);
            // console.log(jobDetails)
            setData({
                "allowRelocation": false,
                "considerations": "Text is an sadasdasd. da to work from home.  Personal data will be used to manage candidacy.",
                "hardSkills": [
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "jQuery",
                    "Git",
                    "ES6",
                    "SASS",
                    "Twig (Desirable)",
                    "Yarn/NPM",
                    "React/Jamstack/Next.js/Astro (Familiarity)"
                ],
                "jobDescription": "Develop modern, high-converting designs. Program the frontend layer. Design and develop frontend tools. Test across browsers and devices. Work in a heterogeneous team. Perform code reviews. Write reusable code and libraries.",
                "jobTitle": "Front-end Developer",
                "location": "Barcelona, Spain (with remote options)",
                "benefits": [
                    "Competitive salary",
                    "Full-time permanent contract",
                    "Private health insurance",
                    "25 days of holiday",
                    "Birthday off",
                    "Flexible vacation time",
                    "Flextime",
                    "Free Friday afternoons",
                    "Flexibility to work from home",
                    "Ticket restaurant/transport/nursery tickets",
                    "Team-building activities",
                    "Monthly afterwork",
                    "Free coffee and snacks",
                    "Free fresh fruit",
                    "Permanent internal training",
                    "Annual budget for external training",
                    "Games room",
                    "Terrace at the office"
                ],
                "softSkills": [
                    "Entrepreneurial spirit",
                    "Inquisitive",
                    "Analytical",
                    "Self-driven",
                    "Self-motivated",
                    "Highly flexible",
                    "Proactive",
                    "Online business strategic mind",
                    "Advanced problem-solving skills"
                ],
                "teamSize": null,
                "workEnvironment": "Innovative, collaborative, latest technologies",
                "workModel": "Flexible (remote, hybrid, or in-office)"
            });
        }
        catch (error) {
            console.error('Error calling google api cloud:', error);
        }
    }

    return (
        <div data-testid="projects-page" className="flex flex-col">
            <p>Text Job Formatter</p>
            <Button size={'sm'} data-testid={'job-check-button'} className="w-full sm:w-auto mt-2 sm:mt-0" onClick={callApi}>Generate Api Call</Button>
            <div>{data?.jobTitle}</div>
            <div>{data?.jobDescription}</div>
        </div>
    );
}