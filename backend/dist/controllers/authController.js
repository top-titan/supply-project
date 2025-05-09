"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserProfile = exports.loginUser = exports.registerUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
// Generate JWT
const generateToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, process.env.JWT_SECRET || "secret", {
        expiresIn: "30d",
    });
};
// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body || {};
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }
        const userExists = await User_1.default.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = await User_1.default.create({
            name,
            email,
            password,
        });
        if (user) {
            const userObj = user.toObject();
            res.status(201).json({
                _id: userObj._id.toString(),
                name: userObj.name,
                email: userObj.email,
                role: userObj.role,
                token: generateToken(userObj._id),
            });
        }
        else {
            res.status(400).json({ message: "Invalid user data" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
exports.registerUser = registerUser;
// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body || {};
        if (!email || !password) {
            return res.status(400).json({ message: "Please provide email and password" });
        }
        const user = await User_1.default.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            const userObj = user.toObject();
            res.json({
                _id: userObj._id.toString(),
                name: userObj.name,
                email: userObj.email,
                role: userObj.role,
                token: generateToken(userObj._id),
            });
        }
        else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
exports.loginUser = loginUser;
// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
const getUserProfile = async (req, res) => {
    try {
        if (!req.user?._id) {
            return res.status(401).json({ message: "Not authorized" });
        }
        const user = await User_1.default.findById(req.user._id);
        if (user) {
            const userObj = user.toObject();
            res.json({
                _id: userObj._id.toString(),
                name: userObj.name,
                email: userObj.email,
                role: userObj.role,
            });
        }
        else {
            res.status(404).json({ message: "User not found" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
exports.getUserProfile = getUserProfile;
