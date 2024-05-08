import { Router, Request, Response } from "express";
import {
  deleteUserById,
  getAllUsers,
  getCurrentUserProfile,
  getUserById,
  login,
} from "../controller/user.controller";

import { authMiddleware } from "../middleware/auth.middleware";

const userRoutes: Router = Router();

userRoutes.post("/login", login);
userRoutes.get("/my-profile", authMiddleware, getCurrentUserProfile);

userRoutes.get("/all", getAllUsers);

userRoutes.get("/:id", getUserById);

export default userRoutes;
