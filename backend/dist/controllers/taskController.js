"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTasks = exports.deleteTask = exports.addTask = void 0;
const taskModel_1 = __importDefault(require("../models/taskModel")); // Ajusta según la ubicación de tu modelo
// Controlador para agregar una tarea
const addTask = async (req, res) => {
    try {
        const { title, status, label, priority } = req.body;
        const newTask = new taskModel_1.default({
            id: `FNTB-${Math.random().toString(36).substring(2, 6).toUpperCase()}`, // ID único
            title,
            status,
            label,
            priority,
        });
        await newTask.save();
        res.status(201).json({ message: "Task created", task: newTask });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.addTask = addTask;
// Controlador para eliminar una tarea
const deleteTask = async (req, res) => {
    try {
        const { id } = req.body;
        const deletedTask = await taskModel_1.default.findOneAndDelete({ id });
        if (!deletedTask) {
            res.status(404).json({ message: "Task not found" });
            return;
        }
        res.status(200).json({ message: "Task deleted successfully", task: deletedTask });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteTask = deleteTask;
// Controlador para obtener todas las tareas
const getAllTasks = async (_req, res) => {
    try {
        const tasks = await taskModel_1.default.find();
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getAllTasks = getAllTasks;
