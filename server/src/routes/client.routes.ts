import express from "express"
import clientController from "../controller/client-controllers";
import teamMembersController from "../controller/teamMembers-controllers";
import newsAtriclesController from "../controller/newsArticles-controllers";

const clientRoutes = express.Router();

clientRoutes.get("/getPage1", clientController.getPage1Details)
clientRoutes.get("/getTeamMembers", teamMembersController.getTeamMembers)
clientRoutes.get("/getNewsArticles", newsAtriclesController.getNewsArticles)

export default clientRoutes;