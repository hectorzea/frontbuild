import swaggerJSDoc from "swagger-jsdoc";
import swaggerAutogen from "swagger-autogen";
import { StatusOptions } from "../types";

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "http://localhost";

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
            },
        },
        schemas: {
            GeneralErrorResponse: {
                $error: 'An error has ocurred'
            },
            Task: {
                _id: 'asdjasdj123123',
                $title: 'Create Redux Store',
                $status: 'todo',
                $label: 'epic',
                $priority: 'high'
            },
            TaskSuccessResponseSchema: {
                $message: 'Task added successfully',
                $task: {
                    $_id: 'asdjasdj123123',
                    $title: 'Create Redux Store',
                    $status: 'todo',
                    $label: 'epic',
                    $priority: 'high'
                }
            },
            Label: {
                _id: "dksl1m2ss",
                $value: "epic",
                $label: "Epic"
            },
            LabelSuccessResponse: {
                message: "Label added successfully",
                label: {
                    _id: "sdkaskd2222",
                    $value: "epic",
                    $label: "Epic"
                }
            },
            Status: {
                _id: "sjsdla222",
                $value: "in-progress",
                $label: "In-progress"
            },
            StatusSuccessResponse: {
                message: "Status added successfully",
                label: {
                    _id: "sjsdla222",
                    $value: "in-progress",
                    $label: "In-progress"
                }
            },
            Priority: {
                _id: "kslak212ss",
                $value: "medium",
                $label: "Medium"
            },
            PrioritySuccessResponse: {
                message: "Priority added successfully",
                label: {
                    _id: "kslak212ss",
                    $value: "medium",
                    $label: "Medium"
                }
            },
            StatusOptions: {
                '@enum': Object.values(StatusOptions)
            }
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
