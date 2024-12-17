import { Router } from "express";
import TaskController from "../controllers/task.controller";

class TaskRoutes {
  router = Router();
  controller = new TaskController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get("/", this.controller.getAllTasks);
    this.router.post("/add", this.controller.addTask);
    this.router.put("/:id", this.controller.updateTask);
    this.router.delete("/delete", this.controller.deleteTask);
  }
}

export default new TaskRoutes().router;