import {
  Priority,
  PriorityIcon,
  priorityIconMap,
  Status,
  StatusIcon,
  statusIconMap,
} from "@/app/(frontbuild)/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { randomBytes } from "crypto";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getStatusIcon = (status: Status): StatusIcon => {
  return statusIconMap[status];
};

export const getPriorityIcon = (priority: Priority): PriorityIcon => {
  return priorityIconMap[priority];
};

export const capitalizeFirstLetter = (value: string) => {
  return value?.charAt(0).toUpperCase() + value?.slice(1);
};

export const getSpotifyTrackUrl = (url: string): string | null => {
  try {
    const parsedUrl = new URL(url);
    const parts = parsedUrl.pathname.split("/");
    if (parts[1] === "track" && parts[2]) {
      return parts[2];
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
