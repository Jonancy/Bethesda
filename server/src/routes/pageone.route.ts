import express from "express"
import { getPage1Details } from "../controller/page1-controllers";



const pageOneRoutes = express.Router();

pageOneRoutes.get("/all", getPage1Details)

export default pageOneRoutes;