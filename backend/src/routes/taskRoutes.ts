import express from "express";
import {
  addTask,
  deleteTask,
  getAllTasks,
} from "../controllers/taskController";

const router = express.Router();

router.post("/add", addTask);
router.delete("/delete", deleteTask);
router.get("/", getAllTasks);

export default router;