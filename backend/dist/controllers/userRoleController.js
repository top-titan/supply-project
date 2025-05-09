"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserRole = void 0;
const User_1 = __importDefault(require("../models/User"));
// Define permissions for each role
const rolePermissions = {
    topManager: {
        canViewAllCompanies: true,
        canManageCompanies: true,
        canViewAllShops: true,
        canManageShops: true,
        canViewAllFamilies: true,
        canManageFamilies: true,
        canViewReports: true,
    },
    companyManager: {
        canViewOwnCompany: true,
        canManageOwnCompany: true,
        canViewCompanyShops: true,
        canManageCompanyShops: true,
        canViewCompanyFamilies: true,
        canManageCompanyFamilies: true,
        canViewCompanyReports: true,
    },
    shopManager: {
        canViewOwnShop: true,
        canManageOwnShop: true,
        canViewShopCustomers: true,
        canManageShopCustomers: true,
        canViewShopInventory: true,
        canManageShopInventory: true,
    },
    familyMember: {
        canViewOwnFamily: true,
        canViewOwnConsumption: true,
        canRequestDelivery: true,
        canReportIssues: true,
    },
    securityChecker: {
        canViewSecurityAlerts: true,
        canManageSecurityAlerts: true,
        canPerformSecurityChecks: true,
        canGenerateSecurityReports: true,
    },
};
// @desc    Get user role and permissions
// @route   GET /api/users/:id/role
// @access  Private
const getUserRole = async (req, res) => {
    try {
        const user = await User_1.default.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const userRole = user.role;
        const permissions = rolePermissions[userRole] || {};
        res.json({ role: userRole, permissions });
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
exports.getUserRole = getUserRole;
