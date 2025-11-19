import { z } from "zod";
import {
  LabelOptions,
  PriorityOptions,
  StatusOptions,
  Task as TaskModel,
} from "@/app/types/api/Api";
import { CardMatchRequestPayload } from "@/app/types";

export const taskSchema: z.ZodType<TaskModel> = z.object({
  _id: z.string().optional(),
  title: z.string().nonempty({ message: "Title is required" }),
  status: z.nativeEnum(StatusOptions, { message: "Invalid status" }),
  label: z.nativeEnum(LabelOptions, { message: "Invalid label" }),
  priority: z.nativeEnum(PriorityOptions, { message: "Invalid priority" }),
});

export type Task = z.infer<typeof taskSchema>;
//TEST
export const cardMatchResultSchema: z.ZodType<CardMatchRequestPayload> =
  z.object({
    win: z.boolean(),
    matchUrl: z.string().nonempty("Match URL is required"),
  });
