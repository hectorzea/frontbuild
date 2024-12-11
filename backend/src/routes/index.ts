import { Application } from "express";
import taskRoutes from "./task.routes";
import labelRoutes from "./label.routes";
import statusRoutes from "./status.routes";
import prioritiesRoutes from "./priority.routes"
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../config/swagger';

export default class Routes {
    constructor(app: Application) {
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
        app.get('/swagger.json', (req, res) => {
            res.json(swaggerSpec); // Devuelve el archivo JSON con la especificación Swagger
        });
        app.use("/api/tasks", taskRoutes);
        app.use("/api/labels", labelRoutes);
        app.use("/api/status", statusRoutes);
        app.use("/api/priorities", prioritiesRoutes);
    }
}