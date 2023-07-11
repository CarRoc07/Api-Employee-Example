import express from "express";
import employeesRouter from "./routes/routes.js";
import cors from 'cors'

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api", employeesRouter)

app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint not found' });
})


export default app;