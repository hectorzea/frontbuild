import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/db";
import taskRoutes from "./routes/taskRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 80;

// Configura CORS
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "DELETE"],
        allowedHeaders: ["Content-Type"],
    })
);

// Middlewares
app.use(express.json());

// Rutas
app.use("/api/tasks", taskRoutes);

// Ruta base
app.get("/", (_req, res) => {
    res.send("FrontBuild Backend");
});

// Conexión a MongoDB y servidor
connectDB()
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
        console.error("Failed to connect to the database:", err);
        process.exit(1);
    });