import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
  title: string;
  status: string;
  label: string;
  priority: string;
}

const taskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  status: { type: String, required: true },
  label: { type: String, required: true },
  priority: { type: String, required: true },
});

export default mongoose.model<ITask>("Task", taskSchema);