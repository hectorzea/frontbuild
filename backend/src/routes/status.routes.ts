import { Router } from "express";
import StatusController from "../controllers/status.controller";

class TaskRoutes {
    router = Router();
    controller = new StatusController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get("/", this.controller.getAllStatus);
        this.router.post("/add", this.controller.addStatus);
        this.router.delete("/delete", this.controller.deleteStatus);
    }
}

export default new TaskRoutes().router;