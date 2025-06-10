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
        const jobDescription = "Acerca del empleo Life is too short to work for a boring company so why dont you join us We are looking for a Front-end Developer to join our dynamic team Does that sound like you But first Lets break the ice Who We Are  What We Do At Leadtech we work hard and play harder Our mission is to bring forward new business ideas and empower employees to achieve their goals in the online business world Since 2009 we have been fostering innovative and creative techniques across many industries making us pioneers in online project management Leadtech is dedicated to constant improvement and inspiring new ideas daily for the world we live in and the future to come If you have a creative and innovative mind Leadtech is looking for you Does this still look like your cup of tea Theres more Responsibilities Youre our perfect candidate if you Develop modern high-converting designs that utilize all the best marketing techniques Program the frontend layer of our sites in HTML5 CSS3 and JS taking into account standards compatibility between browsers and mobile devices Design and develop the frontend layer of our own tools Test across multiple browsers and devices to ensure maximum compatibility Work with a heterogeneous team consisting of Product Marketing Design QA and Operations Perform regular code reviews with the team Write reusable code and libraries Requirements Your expertise in a nutshell At least 4 years of work experience in front-end development Proficient in HTML5 CSS3 Javascript jQuery and Git Must be able to code from scratch in JavaScript such as ES6 Solid understanding of SASS Desirable experience with Twig or another template engine for php Comfortable with package managers such as Yarn NPM etc Familiarity with ReactJamstacks NextJs or Astro Entrepreneurial spirit inquisitive analytical self-driven and self-motivated Be highly flexible and proactive Online business strategic mind Advanced problem-solving skills Coding and implementation using best practices to produce high performingscalablesecured modules Fluent in Eglish and Spanish Interested Keep on reading Benefits Some of the perks of working with us Competitive salary Full-time permanent contract Private health insurance 25 days of holiday  your birthday off Flexible vacation time no blackout days Flextime 7 - 0930h  1530 - 1830h Free Friday afternoons a 7-hour workday 35-hour week for the full months of July and August free afternoons Flexibility to work from home Other benefits paid from the gross salary ticket restaurant transport tickets nursery tickets Team-building activities Monthly afterwork Free coffee and snacks Free fresh fruit Permanent internal training  annual budget for external training Games room Nintendo table tennis futbolin Terrace at the office An innovative approach to all internal processes and businesses Work with the latest technologies  career progress opportunities Equal Employment Opportunity Employer Leadtech is an Equal Employment Opportunity EEO Employer which means we encourage applications from people with different backgrounds interests and personal circumstances Our team welcomes applicants regardless of their race gender age religion nationality sexual orientation andor disabilities All we need is your high energy skills and willingness to be part of a great project Hiring process First step 30-minute phone interview to get to know you Second step Technical test Third step Online interview with HR and your future manager to talk about the position and how we approach work It includes a brief skill assessment test Sounds good Apply now Were looking forward to meeting you Location Youll have the flexibility to choose whether youd like to come to the office every day from time to time or work fully remote We want you to find the best combination for you If you prefer to be surrounded with amazing people our exceptional office is in Barcelonas Blue Building located right on the citys seafront Besides our stunning views youll enjoy our office perks such as free fruit snacks and coffee and youll also be able to take part in our Mario Kart and table tennis competitions The personal data you provide will be used to manage your candidacy for the corporate selection processes that fit your profile If you wish you can exercise your rights of access rectification or cancellation by sending a letter to Avenida Litoral 12-14 5ta planta Barcelona 08005 or emailing us at protecciondedatosLeadTechcom including a document that validates your identity";
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
                "considerations": "Leadtech is an Equal Employment Opportunity Employer. Flexibility to work from home.  Personal data will be used to manage candidacy.",
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