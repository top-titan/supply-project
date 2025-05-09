import express from "express";
import { protect } from "../middleware/authMiddleware";
import { requireRole } from "../middleware/roleMiddleware";

const router = express.Router();

// Protected routes
router.use(protect);

// Shop owner and admin routes
router.use(requireRole(["shop_owner", "admin"]));

export default router; 