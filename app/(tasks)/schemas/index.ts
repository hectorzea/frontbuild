import { z } from "zod";
import {
  LabelOptions,
  PriorityOptions,
  StatusOptions,
} from "@/app/(tasks)/types";

export const taskSchema = z.object({
  _id: z.string().optional(),
  title: z.string().min(5, { error: "Title is required" }),
  status: z.enum(StatusOptions, { error: "Invalid status" }),
  label: z.enum(LabelOptions, { error: "Invalid label" }),
  priority: z.enum(PriorityOptions, { error: "Invalid priority" }),
});

export type Task = z.infer<typeof taskSchema>;

export const cardMatchResultSchema = z.object({
  win: z.boolean(),
  matchUrl: z.string().min(5, { error: "Match URL is required" }),
});
export type CardMatchResult = z.infer<typeof cardMatchResultSchema>;
