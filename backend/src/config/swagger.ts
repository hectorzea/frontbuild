import swaggerJSDoc from "swagger-jsdoc";
import mongooseToSwagger from "mongoose-to-swagger";
import Task from "../models/taskModel";
import Label from "../models/labelModel"
import Status from "../models/statusModel"
import Priority from "../models/priorityModel"

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "http://localhost";

const taskSchema = mongooseToSwagger(Task);
const labelSchema = mongooseToSwagger(Label);
const statusSchema = mongooseToSwagger(Status);
const prioritySchema = mongooseToSwagger(Priority);

const swaggerOptions: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'FrontBuild API Documentacion',
            version: '1.0.0',
            description: 'FrontBuild backend api for creating task and other functionalities generated with swagger-jsdoc',
        },
        components: {
            schemas: {
                Task: taskSchema,
                Label: labelSchema,
                Status: statusSchema,
                Priority: prioritySchema
            },
        },
        servers: [
            {
                url: `${HOST}:${PORT}`,
                description: 'Dev local server',
            },
        ],
    },
    apis: ['./src/routes*.ts'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
export default swaggerSpec;