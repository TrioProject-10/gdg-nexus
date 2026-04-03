import express from "express";
import { tryOn } from "../controllers/tryonController.js";

const router = express.Router();

router.post("/", tryOn);

export default router;