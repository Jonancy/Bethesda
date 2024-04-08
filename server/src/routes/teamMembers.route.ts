import express from "express"
import { getTeamMembers } from "../controller/teamMembers-controllers";



const teamMemberRoutes = express.Router();

teamMemberRoutes.get("/all", getTeamMembers)

export default teamMemberRoutes;