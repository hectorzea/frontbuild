const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const taskRoutes = require("./modules/task/routes")

dotenv.config();

const app = express();
const PORT = process.env.PORT || 80;

// Configura CORS para permitir solicitudes desde tu frontend (puedes usar un origen específico)
app.use(cors({
    origin: 'http://localhost:3000', // Asegúrate de que el frontend se está ejecutando en este puerto
    methods: ['GET', 'POST'], // Métodos permitidos
    allowedHeaders: ['Content-Type'] // Cabeceras permitidas
}));


app.use(express.json());
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("Frontbuild Backend");
});

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});