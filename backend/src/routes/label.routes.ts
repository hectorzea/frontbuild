import { Router } from "express";
import LabelController from "../controllers/label.controller";

class TaskRoutes {
    router = Router();
    controller = new LabelController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get("/", this.controller.getAllLabels);
        this.router.post("/add", this.controller.addLabel);
        this.router.delete("/delete", this.controller.deleteLabel);
    }
}

export default new TaskRoutes().router;