import { Router, Request, Response } from "express";
import { deleteUserById, getAllUsers, getCurrentUserProfile, getUserById, login, me,} from "../controller/user.controller";

import  {authMiddleware}  from '../middleware/auth.middleware';


const userRouter: Router = Router();

userRouter.post("/login", login);
userRouter.get("/me",authMiddleware, me);
userRouter.get("/my-profile",authMiddleware, getCurrentUserProfile);
userRouter.get("/all", getAllUsers);
userRouter.get("/:id", getUserById);

export default userRouter;
