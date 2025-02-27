import mongoose, { Schema, Document } from "mongoose";
import { StatusOptions } from "../types";

export interface IStatus extends Document {
    value: StatusOptions;
    label: string;
}

export const statusSchema = new Schema<IStatus>({
    value: { type: String, required: true, enum: Object.values(StatusOptions) },
    label: { type: String, required: true },
});

export default mongoose.model<IStatus>("Status", statusSchema);