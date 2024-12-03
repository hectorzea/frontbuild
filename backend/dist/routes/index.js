"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_routes_1 = __importDefault(require("./task.routes"));
class Routes {
    constructor(app) {
        app.use("/api/tasks", task_routes_1.default);
        console.log('jajaj');
    }
}
exports.default = Routes;
