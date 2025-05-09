import express from "express";
import { protect } from "../middleware/authMiddleware";
import { requireRole } from "../middleware/roleMiddleware";

const router = express.Router();

// Protected routes
router.use(protect);

// Admin and shop owner routes
router.use(requireRole(["admin", "shop_owner"]));

export default router; 