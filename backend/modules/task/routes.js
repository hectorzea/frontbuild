const express = require("express");
const Task = require("./models");
const router = express.Router();

// Ruta para agregar una nueva tarea
router.post("/add", async (req, res) => {
  try {
    const { title, status, label, priority } = req.body;
    const newTask = new Task({
      id: `FNTB-${Math.random().toString(36).substring(2, 6).toUpperCase()}`, // Genera un ID único
      title,
      status,
      label,
      priority,
    });

    await newTask.save();
    res.status(201).json({ message: "Task created", task: newTask });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const { id } = req.body;

    const deletedTask = await Task.findOneAndDelete({ id });

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully", task: deletedTask });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para listar todas las tareas
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;