import { Request, Response } from 'express';
import Status from '../models/statusModel'

export default class StatusController {
    async getAllStatus(req: Request, res: Response) {
        try {
            const status = await Status.find();
            res.status(200).json(status);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    };

    async addStatus(req: Request, res: Response) {
        try {
            const { value, label } = req.body;
            const newStatus = new Status({
                value, label
            });
            await newStatus.save();
            res.status(201).json({ message: "Status created", status: newStatus });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    };

    async deleteStatus(req: Request, res: Response) {
        try {
            const { _id } = req.body;
            const deletedStatus = await Status.findOneAndDelete({ _id });

            if (!deletedStatus) {
                res.status(404).json({ message: "Status not found" });
                return;
            }

            res.status(200).json({ message: "Status deleted successfully", task: deletedStatus });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    };
}