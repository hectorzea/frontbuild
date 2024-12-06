"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_routes_1 = __importDefault(require("./task.routes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("../config/swagger"));
class Routes {
    constructor(app) {
        app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
        app.get('/swagger.json', (req, res) => {
            res.json(swagger_1.default); // Devuelve el archivo JSON con la especificación Swagger
        });
        app.use("/api/tasks", task_routes_1.default);
    }
}
exports.default = Routes;
