"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_1 = __importDefault(require("../controllers/task.controller"));
class TaskRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new task_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", this.controller.getAllTasks);
        this.router.post("/add", this.controller.addTask);
        this.router.put("/:id", this.controller.updateTask);
        this.router.delete("/delete", this.controller.deleteTask);
    }
}
exports.default = new TaskRoutes().router;
