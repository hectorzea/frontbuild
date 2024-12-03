import { Application } from "express";
import taskRoutes from "./task.routes";

export default class Routes {
    constructor(app: Application) {
        app.use("/api/tasks", taskRoutes);
    }
}