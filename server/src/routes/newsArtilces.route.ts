import express from "express"
import { addNewsArticle, getNewsArticles, updateNewsArticleById } from "../controller/newsArticles-controllers";
import { authMiddleware } from "../middleware/auth.middleware";

const newsArticlesRoutes = express.Router();

<<<<<<< HEAD
newsArticlesRoutes.get("/all", getNewsArticles)
newsArticlesRoutes.post("/add", authMiddleware, addNewsArticle)
newsArticlesRoutes.patch("/edit/:id", authMiddleware, updateNewsArticleById)
newsArticlesRoutes.delete("/delete/:id", authMiddleware, updateNewsArticleById)

=======
newsArticlesRoutes.get("/allArticles", getNewsArticles)
>>>>>>> ea87b6db04a24337895b88aa463493580653a3dd

export default newsArticlesRoutes;