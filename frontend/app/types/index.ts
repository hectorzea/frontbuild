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
