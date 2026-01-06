import { JobOffer } from "@/app/(frontbuild)/types";
import { http, HttpResponse } from "msw";

//request bodies
type CheckJobRequestBody = {
  linkedinJobUrl: string;
};

type CheckJobSuccessResponse = JobOffer;

export const jobData: JobOffer = {
  allowRelocation: true,
  yearsOfExperience: "9 years",
  salaryRange: null,
  recruitmentProcessSteps: [
    "15-minute introductory call with our Talent Acquisition Specialist.",
    "30 min - Teams meeting with our Hiring Manager to learn more about the project, the role.",
    "Last technical interview.",
  ],
  jobLink:
    "https://es.linkedin.com/jobs/view/front-end-developer-automated-testing-at-nextlane-4235320232",
  companyName: "Nextlane",
  considerations: [
    "While the job offers 'Remote Work: Up to 3 days a week', you are currently based in Berlin and the job is in Madrid. Be prepared to discuss your willingness to relocate to Madrid or establish a clear plan for in-office presence.",
    "Although you have strong experience with various CSS frameworks, familiarize yourself with Material UI (MUI) as it's listed as 'desirable' in the job description.",
    "Explicitly highlight your experience in collaborating with DevOps teams or your understanding of CI/CD pipelines, even if specific tools beyond Docker are not on your CV, to show alignment with the 'DevOps and Deployment' responsibilities.",
  ],
  hardSkills: {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "CSS",
      "Bootstrap",
      "TailwindCSS",
      "Chakra",
      "UI5",
      "JavaScript",
      "Fiori",
      "MUI (desirable)",
    ],
    backend: [
      "NodeJS",
      "SQL",
      "RESTful APIs (integration)",
      "Express",
      "Kotlin (for E2E tests)",
    ],
    cicd: ["Docker", "CI/CD pipelines (collaboration)"],
    testing: [
      "Playwright",
      "Cypress",
      "Jest",
      "React Testing Library",
      "Selenium",
      "MSW",
      "Unit Testing",
      "Integration Testing",
      "End-to-End Testing",
    ],
    extras: [
      "AWS",
      "Agile Methodologies (Scrum)",
      "Performance Optimization",
      "Coding Standards",
      "SAP Cloud Platform (SCP)",
    ],
  },
  jobDescription:
    "Nextlane is seeking a Frontend Developer with strong automated testing expertise to build and enhance web applications for the automotive industry. The role involves developing high-performance, scalable, and maintainable front-end solutions using React, Next.js, and TypeScript. A critical aspect is designing and maintaining comprehensive test suites (unit, integration, E2E) with tools like Playwright and Cypress. The developer will collaborate closely with cross-functional teams (design, backend, product), contribute to code quality, provide mentorship, and work with Docker and CI/CD pipelines in an Agile environment.",
  jobTitle: "Front-End Developer (Automated Testing)",
  location: "Madrid, Community of Madrid, Spain",
  softSkills: [
    "Strong problem-solving",
    "Ability to work independently",
    "Excellent communication",
    "Collaboration (cross-functional teams)",
    "Passion for continuous learning",
    "Staying up-to-date with industry trends",
    "Technical guidance and mentorship",
    "Agile Development",
  ],
  teamSize: null,
  workEnvironment:
    "Growth-oriented culture, international collaboration, values diversity of thought, committed to learning and growth, offers remote work (up to 3 days/week), flexible entrance/departure time, summer schedule on Fridays, referral bonuses, flexible remuneration (COBEE platform), private medical insurance (Adeslas), continuous learning platform, teambuilding activities, commitment to diversity, inclusion & belonging (support for people with disabilities, equal opportunities).",
  matchPercentage: 86,
  matchReasoningKeyPoints: [
    "**Strong Frontend Core:** Your CV demonstrates extensive experience with React, Next.js, and TypeScript, which are core requirements for this role.",
    "**Exceptional Testing Expertise:** You have direct experience with key automated testing tools (Playwright, Cypress, Jest, React Testing Library) and methodologies (unit, E2E, integration testing) that are central to the job's focus.",
    "**Exceeds Experience Requirements:** With 9 years of professional experience, you comfortably surpass the stated minimum of 4-5 years.",
    "**Aligned Soft Skills & Agile:** Your CV highlights collaboration, mentorship, and TDD, which directly match the job's emphasis on excellent communication, technical guidance, and Agile development.",
    "**Relevant Backend & DevOps Knowledge:** Your experience with NodeJS, SQL, RESTful API integration, and Docker aligns well with the job's technical stack and collaboration with DevOps.",
    "**Location Mismatch (Primary Challenge):** The job is based in Madrid with a hybrid model (2 days in office), while you are in Berlin. This would require relocation or a significant travel commitment, which is the main point of divergence.",
  ],
};

export const jobCheckHandlers = [
  http.post<CheckJobRequestBody, CheckJobSuccessResponse>(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/ai/process-job`,
    async ({ request }) => {
      await request.json();
      return HttpResponse.json(jobData);
    }
  ),
];
