import express from "express"
import { getPage1Details } from "../controller/page1-controllers";
import { getTeamMembers } from "../controller/teamMembers-controllers";
import { getNewsArticles } from "../controller/newsArticles-controllers";


const clientRoutes = express.Router();


clientRoutes.get("/getTeamMembers", getTeamMembers)
clientRoutes.get("/getNewsArticles", getNewsArticles)

export default clientRoutes;