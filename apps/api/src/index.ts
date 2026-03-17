import "dotenv/config";
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./lib/swagger";
import tasksRouter from "./routes/tasks";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.redirect("/api/docs");
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Documentación
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
  console.log(`Docs available at http://localhost:${PORT}/api/docs`);
});