"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = require("../controllers/taskController");
const router = express_1.default.Router();
router.post("/add", taskController_1.addTask);
router.delete("/delete", taskController_1.deleteTask);
router.get("/", taskController_1.getAllTasks);
exports.default = router;
