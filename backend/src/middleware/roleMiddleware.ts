import { Request, Response, NextFunction } from "express";
import User, { IUser } from "../models/User";

export const requireRole = (roles: string[]) => {
  return async (req: Request & { user?: any }, res: Response, next: NextFunction) => {
    try {
      const user = await User.findById(req.user?._id) as IUser | null;

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (!roles.includes(user.role as string)) {
        return res
          .status(403)
          .json({ message: "Not authorized to access this resource" });
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };
};
