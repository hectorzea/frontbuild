import mongoose, { Schema, Document } from "mongoose";
import { PriorityOptions } from "../types";

export interface IPriority extends Document {
    value: PriorityOptions;
    label: string;
}

export const prioritySchema = new Schema<IPriority>({
    value: { type: String, required: true, enum: Object.values(PriorityOptions) },
    label: { type: String, required: true },
});

export default mongoose.model<IPriority>("Priority", prioritySchema);