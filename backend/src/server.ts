import express, { Application } from "express";
import dotenv from "dotenv";
import Server from "./index";
import connectDB from "./utils/db";

dotenv.config();

const app: Application = express();
const server: Server = new Server(app);

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

connectDB()
    .then(() => {
        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server is running on port ${PORT}.`);
        });
    })
    .catch((err) => {
        console.error("Error initializing the server:", err);
    });
