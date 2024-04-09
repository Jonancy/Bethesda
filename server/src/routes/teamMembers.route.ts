import express from "express"
import { addTeamMember, deleteTeamMemberById, getTeamMembers, updateTeamMemberById } from "../controller/teamMembers-controllers";
import { authMiddleware } from "../middleware/auth.middleware";



const teamMemberRoutes = express.Router();

teamMemberRoutes.get("/all", getTeamMembers)
teamMemberRoutes.get("/add",authMiddleware, addTeamMember)
teamMemberRoutes.patch("/edit/:id",authMiddleware, updateTeamMemberById)
teamMemberRoutes.delete("/delete/:id",authMiddleware, deleteTeamMemberById)


export default teamMemberRoutes;