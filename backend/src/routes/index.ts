import { Application } from "express";
import taskRoutes from "./task.routes";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../config/swagger';

export default class Routes {
    constructor(app: Application) {
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
        app.use("/api/tasks", taskRoutes);
    }
}