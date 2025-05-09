import express from "express";
import { protect } from "../middleware/authMiddleware";
import { requireRole } from "../middleware/roleMiddleware";

const router = express.Router();

// Protected routes
router.use(protect);

// Admin only routes
router.use(requireRole(["admin"]));

export default router; 