import { Router } from "express";
import PriorityController from "../controllers/priority.controller";

class TaskRoutes {
    router = Router();
    controller = new PriorityController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get("/", this.controller.getAllPriorities);
        this.router.post("/add", this.controller.addPriority);
        this.router.delete("/delete", this.controller.deletePriority);
    }
}

export default new TaskRoutes().router;