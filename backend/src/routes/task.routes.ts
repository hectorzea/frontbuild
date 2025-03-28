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
    this.router.post("/add", (req, res, next) => {
      /* #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: { $ref: "#/components/schemas/Task" },
                    examples: { 
                        addTaskExample: { $ref: "#/components/examples/addTaskExample" },
                    }
                }
            }
        }
          #swagger.responses[201] = {
            description: "Add task response",
            content: {
                "application/json": {
                    schema:{
                        $ref: "#/components/schemas/TaskSuccessResponseSchema"
                    }
                }           
            }
        }   
    */
    this.controller.addTask(req, res);
    });
    this.router.put("/:id", this.controller.updateTask);
    this.router.delete("/:id", this.controller.deleteTask);
  }
}

export default new TaskRoutes().router;