import { Request, Response } from 'express';
import Label from '../models/labelModel'

export default class LabelController {
    async getAllLabels(req: Request, res: Response) {
        try {
            const labels = await Label.find();
            res.status(200).json(labels);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    };

    async addLabel(req: Request, res: Response) {
        try {
            const { value, label } = req.body;
            const newLabel = new Label({
                value, label
            });

            await newLabel.save();
            res.status(201).json({ message: "Label created", label: newLabel });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    };

    async deleteLabel(req: Request, res: Response) {
        try {
            const { _id } = req.body;
            const deletedLabel = await Label.findOneAndDelete({ _id });

            if (!deletedLabel) {
                res.status(404).json({ message: "Label not found" });
                return;
            }

            res.status(200).json({ message: "Label deleted successfully", task: deletedLabel });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    };
}