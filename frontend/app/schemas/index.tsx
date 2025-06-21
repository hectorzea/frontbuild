import { z } from "zod";
import {
  LabelOptions,
  PriorityOptions,
  StatusOptions,
  Task as TaskModel,
} from "@/app/types/api/Api";

export const taskSchema: z.ZodType<TaskModel> = z.object({
  _id: z.string().optional(),
  title: z.string().nonempty({ message: "Title is required" }),
  status: z.nativeEnum(StatusOptions, { message: "Invalid status" }),
  label: z.nativeEnum(LabelOptions, { message: "Invalid label" }),
  priority: z.nativeEnum(PriorityOptions, { message: "Invalid priority" }),
});

export type Task = z.infer<typeof taskSchema>;
