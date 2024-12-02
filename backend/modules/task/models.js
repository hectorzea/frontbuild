const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    status: { type: String, required: true },
    label: { type: String, required: true },
    priority: { type: String, required: true },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;