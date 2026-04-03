import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import catalogRoutes from "./routes/catalog.js";
import tryonRoutes from "./routes/tryon.js";
import recommendationRoutes from "./routes/recommendation.js";
import vendorRoutes from "./routes/vendor.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/catalog", catalogRoutes);
app.use("/api/tryon", tryonRoutes);
app.use("/api/recommend", recommendationRoutes);
app.use("/api/vendor", vendorRoutes);

export default app;