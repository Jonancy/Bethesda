import express from "express"
import { getNewsArticles } from "../controller/newsArticles-controllers";

const newsArticlesRoutes = express.Router();

newsArticlesRoutes.get("/all", getNewsArticles)

export default newsArticlesRoutes;