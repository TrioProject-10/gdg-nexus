import express from "express";
import { addProduct, getVendorProducts } from "../controllers/vendorController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/product", protect, addProduct);
router.get("/products", protect, getVendorProducts);

export default router;