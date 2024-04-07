import express from "express"
import clientController from "../controller/client-controllers";

const clientRoutes = express.Router();

clientRoutes.get("/getPage1", clientController.getPage1Details)
clientRoutes.get("/getTeamMembers", clientController.getTeamMembers)
export default clientRoutes;