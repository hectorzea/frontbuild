import { Request, Response } from 'express';
import Task from '../models/taskModel'

export default class TaskController {
  async getAllTasks(req: Request, res: Response) {
    try {
      const tasks = await Task.find();
      res.status(200).json(tasks);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

  async addTask(req: Request, res: Response) {
    try {
      const { title, status, label, priority } = req.body;
      const newTask = new Task({
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

  async updateTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updateTask = req.body

      const updatedTask = await Task.findByIdAndUpdate(id, updateTask, {
        new: true,
        runValidators: true,
      });

      if (!updatedTask) {
        res.status(404).json({ message: "Task not found" });
      }
      res.status(200).json({ message: "Task updated successfully", task: updatedTask });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedTask = await Task.findOneAndDelete({ _id: id });

      if (!deletedTask) {
        res.status(404).json({ message: "Task not found" });
        return;
      }
      
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };
}