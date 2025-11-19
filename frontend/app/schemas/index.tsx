import { z } from "zod";
import {
  LabelOptions,
  PriorityOptions,
  StatusOptions,
} from "@/app/types/api/Api";

export const taskSchema = z.object({
  _id: z.string().optional(),
  title: z.string().min(5, { message: "Title is required" }),
  status: z.enum(StatusOptions, { message: "Invalid status" }),
  label: z.enum(LabelOptions, { message: "Invalid label" }),
  priority: z.enum(PriorityOptions, { message: "Invalid priority" }),
});

export type Task = z.infer<typeof taskSchema>;

export const cardMatchResultSchema = z.object({
  win: z.boolean(),
  matchUrl: z.string().min(5, { error: "Match URL is required" }),
});
export type CardMatchResult = z.infer<typeof cardMatchResultSchema>;
