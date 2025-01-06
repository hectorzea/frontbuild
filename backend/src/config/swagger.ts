import swaggerJSDoc from "swagger-jsdoc";
import mongooseToSwagger from "mongoose-to-swagger";
import Task from "../models/taskModel";
import Label from "../models/labelModel"
import Status from "../models/statusModel"
import Priority from "../models/priorityModel"
import swaggerAutogen from "swagger-autogen";

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "http://localhost";

const taskSchema = mongooseToSwagger(Task);
const labelSchema = mongooseToSwagger(Label);
const statusSchema = mongooseToSwagger(Status);
const prioritySchema = mongooseToSwagger(Priority);

const swaggerDoc = {
    openapi: '3.0.0',
    info: {
        version: '1.0.0',
        title: 'FrontBuild API Documentacion',
        description: 'FrontBuild backend api for creating task and other funcionalidades generated with swagger-jsdoc',
    },
    servers: [
        {
            url: `${HOST}:${PORT}`,
            description: 'Dev local server',
        },
    ],
    components: {
        examples: {
            addTaskExample: {
                value: {
                    title: "Example Task",
                    status: "pending",
                    label: "work",
                    priority: "high",
                }
            }
        },
        schemas: {
            Task: taskSchema,
            Label: labelSchema,
            Status: statusSchema,
            Priority: prioritySchema,
        },
    },
}

const swaggerJSDocOptions = {
    definition: {
        ...swaggerDoc
    },
    apis: ['./src/routes/*.ts'],
};

export const swaggerSpec = swaggerJSDoc(swaggerJSDocOptions);
const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/routes/index.ts'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, swaggerDoc);
