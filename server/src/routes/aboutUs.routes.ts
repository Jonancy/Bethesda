import express from "express"
import { getAboutUsDetails } from "../controller/about-us.controllers";


const aboutUsRoutes = express.Router();


aboutUsRoutes.get("/getAboutUs", getAboutUsDetails)

export default aboutUsRoutes;