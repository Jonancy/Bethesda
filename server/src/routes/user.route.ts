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

/**
 * @swagger
 * /api/v1/user/login:
 *   post:
 *     summary: Authenticate user
 *     description: Login with username and password to get authentication token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Successfully authenticated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     username:
 *                       type: string
 *                     token:
 *                       type: string
 *       '400':
 *         description: Invalid credentials or user not found
 */
userRoutes.post("/login", login);

/**
 * @swagger
 * /api/v1/user/my-profile:
 *   get:
 *     summary: Get the current authenticated user's profile
 *     description: Retrieve the current authenticated user's profile information.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Current user profile
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 username:
 *                   type: string
 *       '400':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
userRoutes.get("/my-profile", authMiddleware, getCurrentUserProfile);

userRoutes.get("/all", getAllUsers);

userRoutes.get("/:id", getUserById);

export default userRoutes;
