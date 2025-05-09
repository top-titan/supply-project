"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireRole = void 0;
const User_1 = __importDefault(require("../models/User"));
const requireRole = (roles) => {
    return async (req, res, next) => {
        try {
            const user = await User_1.default.findById(req.user?._id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            if (!roles.includes(user.role)) {
                return res
                    .status(403)
                    .json({ message: "Not authorized to access this resource" });
            }
            next();
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        }
    };
};
exports.requireRole = requireRole;
