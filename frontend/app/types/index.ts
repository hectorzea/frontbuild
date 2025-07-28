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

export interface HearthstoneCardInfo {
  cardId: string;
  name: string;
  type: string;
  faction: string;
  cardSet: string;
  rarity: string;
  race: string;
  img: string;
  locale: string;
  tokens: HearthstoneCardInfo[];
  discover: string[];
  mechanics: CardMechanic[];
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

interface CardMechanic {
  name: string;
}

export interface CardMatchResultsModel {
  myClassId: string;
  classOponentId: string;
  turnsDuration: string;
  win: boolean;
  initialCards: string;
  discardedCards: string;
}

export enum HeroClass {
  Druid = "DRUID",
  Paladin = "PALADIN",
  DeathKnight = "DEATHKNIGHT",
  Mage = "MAGE",
  Warlock = "WARLOCK",
  Warrior = "WARRIOR",
  Shaman = "SHAMAN",
  Rogue = "ROGUE",
  Hunter = "HUNTER",
  DemonHunter = "DEMONHUNTER",
}

export interface WinRateMulliganResponse {
  cardId: string;
  totalGames: number;
  wins: number;
  winrate: number;
}
