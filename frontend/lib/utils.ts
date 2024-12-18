import { Status, StatusIcon, statusIconMap } from "@/components/frontbuild/data";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getStatusIcon = (status: Status): StatusIcon => {
  return statusIconMap[status];
};