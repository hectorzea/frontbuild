import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle,
  Circle,
  CircleOff,
  HelpCircle,
  Timer,
} from "lucide-react";

export const priorityIconMap = {
  high: ArrowUp,
  medium: ArrowRight,
  low: ArrowDown,
};

export type Priority = keyof typeof priorityIconMap;
export type PriorityIcon = (typeof priorityIconMap)[Priority];

export const statusIconMap = {
  "in-progress": Timer,
  todo: Circle,
  done: CheckCircle,
  cancelled: CircleOff,
  backlog: HelpCircle,
};

export type Status = keyof typeof statusIconMap;
export type StatusIcon = (typeof statusIconMap)[Status];

export interface JobOffer {
  allowRelocation: boolean;
  yearsOfExperience: string;
  salaryRange: string | null;
  recruitmentProcessSteps: string[];
  jobLink: string;
  companyName: string;
  considerations: string[];
  hardSkills: HardSkills;
  jobDescription: string;
  jobTitle: string;
  location: string;
  softSkills: string[];
  teamSize: number | null;
  workEnvironment: string;
  matchPercentage: number;
  matchReasoningKeyPoints: string[];
}

export interface HardSkills {
  frontend: string[];
  backend: string[];
  cicd: string[];
  testing: string[];
  extras: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  stack: string[];
  testingApproach: string[];
  motivation: string;
  link: string;
}
