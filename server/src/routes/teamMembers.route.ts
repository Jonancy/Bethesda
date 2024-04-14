import express from "express";
import {
  addTeamMember,
  deleteTeamMemberById,
  getSpecificMember,
  getTeamMembers,
  updateTeamMemberById,
} from "../controller/teamMembers-controllers";
import { authMiddleware } from "../middleware/auth.middleware";
import multer from "multer";

const uploadMember = multer({ dest: "uploads/team" });

const teamMemberRoutes = express.Router();

teamMemberRoutes.get("/all", getTeamMembers);
teamMemberRoutes.post(
  "/add",
  uploadMember.single("image"),
  // authMiddleware,
  addTeamMember
);

teamMemberRoutes.get("/getSingleMember/:id", getSpecificMember);
teamMemberRoutes.patch(
  "/edit/:id",
  uploadMember.single("image"),
  updateTeamMemberById
);
teamMemberRoutes.delete("/delete/:id", authMiddleware, deleteTeamMemberById);

export default teamMemberRoutes;
