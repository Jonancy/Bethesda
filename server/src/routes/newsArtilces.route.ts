import express from "express"
import { addNewsArticle, getNewsArticles, updateNewsArticleById } from "../controller/newsArticles-controllers";
import { authMiddleware } from "../middleware/auth.middleware";

const newsArticlesRoutes = express.Router();

newsArticlesRoutes.get("/all", getNewsArticles)
newsArticlesRoutes.post("/add", authMiddleware, addNewsArticle)
newsArticlesRoutes.patch("/edit/:id", authMiddleware, updateNewsArticleById)
newsArticlesRoutes.delete("/delete/:id", authMiddleware, updateNewsArticleById)


export default newsArticlesRoutes;