"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const familyController_1 = require("../controllers/familyController");
const router = express_1.default.Router();
router.get("/dashboard", authMiddleware_1.protect, familyController_1.getFamilyDashboardData);
router.get("/consumption", authMiddleware_1.protect, familyController_1.getFamilyConsumptionData);
router.get("/activities", authMiddleware_1.protect, familyController_1.getFamilyActivities);
// // Update your routes to include role check
// router.get("/dashboard", protect, requireRole(["familyMember"]), getFamilyDashboardData);
// router.get("/consumption", protect, requireRole(["familyMember"]), getFamilyConsumptionData);
// router.get("/activities", protect, requireRole(["familyMember"]), getFamilyActivities);
exports.default = router;
