"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./config/database"));
// Import routes
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const shopRoutes_1 = __importDefault(require("./routes/shopRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const companyRoutes_1 = __importDefault(require("./routes/companyRoutes"));
// Load environment variables
dotenv_1.default.config();
// Connect to MongoDB
(0, database_1.default)();
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: process.env.NODE_ENV === 'production'
        ? process.env.FRONTEND_URL
        : 'http://localhost:5173',
    credentials: true
}));
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("dev"));
// Routes
app.use("/api/auth", authRoutes_1.default);
app.use("/api/shops", shopRoutes_1.default);
app.use("/api/users", userRoutes_1.default);
app.use("/api/companies", companyRoutes_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
