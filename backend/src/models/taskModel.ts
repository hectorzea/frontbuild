import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
  id: string;
  title: string;
  status: string;
  label: string;
  priority: string;
}

const taskSchema = new Schema<ITask>({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  status: { type: String, required: true },
  label: { type: String, required: true },
  priority: { type: String, required: true },
});

export default mongoose.model<ITask>("Task", taskSchema);