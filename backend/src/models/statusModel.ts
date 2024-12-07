import mongoose, { Schema, Document } from "mongoose";

export interface IStatus extends Document {
    value: string;
    label: string;
    icon: string;
}

const statusSchema = new Schema<IStatus>({
    value: { type: String, required: true },
    label: { type: String, required: true },
    icon: { type: String, required: true },
});

export default mongoose.model<IStatus>("Status", statusSchema);