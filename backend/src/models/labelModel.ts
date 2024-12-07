import mongoose, { Schema, Document } from "mongoose";

export interface ILabel extends Document {
    value: string;
    label: string
}

export const labelSchema = new Schema<ILabel>({
    value: { type: String, required: true },
    label: { type: String, required: true }
});

export default mongoose.model<ILabel>("Label", labelSchema);