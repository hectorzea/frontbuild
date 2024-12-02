import { Request, Response } from "express";
import Task from "../models/taskModel"; // Ajusta según la ubicación de tu modelo

// Controlador para agregar una tarea
export const addTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, status, label, priority } = req.body;
    const newTask = new Task({
      id: `FNTB-${Math.random().toString(36).substring(2, 6).toUpperCase()}`, // ID único
      title,
      status,
      label,
      priority,
    });

    await newTask.save();
    res.status(201).json({ message: "Task created", task: newTask });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para eliminar una tarea
export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.body;
    const deletedTask = await Task.findOneAndDelete({ id });

    if (!deletedTask) {
      res.status(404).json({ message: "Task not found" });
      return;
    }

    res.status(200).json({ message: "Task deleted successfully", task: deletedTask });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener todas las tareas
export const getAllTasks = async (_req: Request, res: Response): Promise<void> => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};