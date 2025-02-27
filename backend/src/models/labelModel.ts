import mongoose, { Schema, Document } from "mongoose";
import { LabelOptions } from "../types";
export interface ILabel extends Document {
    value: LabelOptions;
    label: string
}

export const labelSchema = new Schema<ILabel>({
    value: { type: String, required: true, enum: Object.values(LabelOptions) },
    label: { type: String, required: true }
});

export default mongoose.model<ILabel>("Label", labelSchema);