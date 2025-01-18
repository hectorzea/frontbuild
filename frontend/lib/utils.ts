import { Priority, PriorityIcon, priorityIconMap, Status, StatusIcon, statusIconMap } from "@/app/types/index"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getStatusIcon = (status: Status): StatusIcon => {
  return statusIconMap[status];
};

export const getPriorityIcon = (priority: Priority): PriorityIcon => {
  return priorityIconMap[priority];
};

export const capitalizeFirstLetter = (value: string) => {
  return value?.charAt(0).toUpperCase() + value?.slice(1);
}
