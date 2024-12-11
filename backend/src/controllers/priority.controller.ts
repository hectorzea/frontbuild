import { Request, Response } from 'express';
import Priority from '../models/priorityModel'

export default class PriorityController {
    async getAllPriorities(req: Request, res: Response) {
        try {
            const priority = await Priority.find();
            res.status(200).json(priority);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    };

    async addPriority(req: Request, res: Response) {
        try {
            const { value, label, icon } = req.body;
            const newPriority = new Priority({
                value, label, icon
            });

            await newPriority.save();
            res.status(201).json({ message: "Priority created", status: newPriority });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    };

    async deletePriority(req: Request, res: Response) {
        try {
            const { _id } = req.body;
            const deletedPriority = await Priority.findOneAndDelete({ _id });

            if (!deletedPriority) {
                res.status(404).json({ message: "Priority not found" });
                return;
            }

            res.status(200).json({ message: "Priority deleted successfully", priority: deletedPriority });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    };
}