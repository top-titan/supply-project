"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFamilyActivities = exports.getFamilyConsumptionData = exports.getFamilyDashboardData = void 0;
const Family_1 = __importDefault(require("../models/Family"));
const getFamilyDashboardData = async (req, res) => {
    try {
        const userId = req.user._id;
        // Find family where user is a member
        const family = await Family_1.default.findOne({ members: userId });
        if (!family) {
            return res.status(404).json({ message: "Family not found" });
        }
        // Calculate days until next delivery
        const daysUntilDelivery = family.nextDeliveryDate
            ? Math.ceil((new Date(family.nextDeliveryDate).getTime() - new Date().getTime()) /
                (1000 * 3600 * 24))
            : null;
        const dashboardData = {
            currentBoxes: family.currentBoxes,
            nextDelivery: daysUntilDelivery,
            alerts: family.alerts,
            usageTrend: family.usageTrend,
            familyName: family.name,
            familyId: family._id,
        };
        res.json(dashboardData);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
exports.getFamilyDashboardData = getFamilyDashboardData;
const getFamilyConsumptionData = async (req, res) => {
    try {
        // Mock data for consumption chart
        const consumptionData = [
            { month: "Jan", planned: 20, actual: 22 },
            { month: "Feb", planned: 20, actual: 19 },
            { month: "Mar", planned: 20, actual: 23 },
            { month: "Apr", planned: 20, actual: 18 },
            { month: "May", planned: 20, actual: 21 },
            { month: "Jun", planned: 20, actual: 17 },
        ];
        res.json(consumptionData);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
exports.getFamilyConsumptionData = getFamilyConsumptionData;
const getFamilyActivities = async (req, res) => {
    try {
        // Mock data for recent activities
        const activities = [
            {
                id: 1,
                type: "delivery",
                date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
                description: "Delivery of 5 boxes",
            },
            {
                id: 2,
                type: "alert",
                date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
                description: "Low stock alert triggered",
            },
            {
                id: 3,
                type: "consumption",
                date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
                description: "Monthly consumption report",
            },
        ];
        res.json(activities);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
exports.getFamilyActivities = getFamilyActivities;
