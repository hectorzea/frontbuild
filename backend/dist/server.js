"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./index"));
const db_1 = __importDefault(require("./utils/db"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = new index_1.default(app);
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
(0, db_1.default)()
    .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server is running on port ${PORT}.`);
    });
})
    .catch((err) => {
    console.error("Error initializing the server:", err);
});
