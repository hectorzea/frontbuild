import { z } from "zod";
import { Task as TaskModel } from "@/app/types/api/Api"; // Aquí estás importando la interfaz generada por Swagger

// Aquí estamos creando un esquema Zod basado en la interfaz Task
export const taskSchema: z.ZodType<TaskModel> = z.object({
  _id: z.string().optional(), // El _id es opcional, como en la interfaz
  title: z.string().min(5, "at least 5 chars"),
  status: z.string(),
  label: z.string(),
  priority: z.string()
});

export type Task = z.infer<typeof taskSchema>;