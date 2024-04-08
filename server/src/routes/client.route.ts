import express from "express"
import { getPage1Details } from "../controller/client-controllers";
import { getTeamMembers } from "../controller/teamMembers-controllers";
import { getNewsArticles } from "../controller/newsArticles-controllers";


const clientRoutes = express.Router();

clientRoutes.get("/getPage1", getPage1Details)
clientRoutes.get("/getTeamMembers", getTeamMembers)
clientRoutes.get("/getNewsArticles", getNewsArticles)

export default clientRoutes;