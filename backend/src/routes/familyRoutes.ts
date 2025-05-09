import express from "express";
import { protect } from "../middleware/authMiddleware";
import {
  getFamilyDashboardData,
  getFamilyConsumptionData,
  getFamilyActivities,
} from "../controllers/familyController";

const router = express.Router();

router.get(
  "/dashboard",
  protect,
  getFamilyDashboardData as express.RequestHandler
);
router.get("/consumption", protect, getFamilyConsumptionData);
router.get("/activities", protect, getFamilyActivities);

import { requireRole } from "../middleware/roleMiddleware";

// // Update your routes to include role check
// router.get("/dashboard", protect, requireRole(["familyMember"]), getFamilyDashboardData);
// router.get("/consumption", protect, requireRole(["familyMember"]), getFamilyConsumptionData);
// router.get("/activities", protect, requireRole(["familyMember"]), getFamilyActivities);

export default router;
