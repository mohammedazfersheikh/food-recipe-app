
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import recipesRouter from "./routes/recipes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Food Recipe API is running" });
});

app.use("/api/recipes", recipesRouter);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("API error:", err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Food Recipe API listening on port ${PORT}`);
});
