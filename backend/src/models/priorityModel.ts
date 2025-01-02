import mongoose, { Schema, Document } from "mongoose";

export interface IPriority extends Document {
    value: string;
    label: string;
}

export const prioritySchema = new Schema<IPriority>({
    value: { type: String, required: true },
    label: { type: String, required: true },
});

export default mongoose.model<IPriority>("Priority", prioritySchema);