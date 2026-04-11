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

export type UserRoles = "user" | "admin" | "moderator";

export interface RouteConfig {
  path: string;
  roles?: UserRoles[];
  redirectTo?: string;
}

export interface JwtPayload {
  roles: UserRoles;
  sub: string;
  exp: number;
}

export const priorityIconMap = {
  high: ArrowUp,
  medium: ArrowRight,
  low: ArrowDown,
};

//todo ver si generar un record acaa
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
