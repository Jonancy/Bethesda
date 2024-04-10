import express from "express";
import {
  addNewsArticle,
  getNewsArticles,
  getSpecificNews,
  updateNewsArticleById,
} from "../controller/newsArticles-controllers";
import { authMiddleware } from "../middleware/auth.middleware";
import multer from "multer";

const upload = multer({ dest: "uploads/news" });

const newsArticlesRoutes = express.Router();

newsArticlesRoutes.get("/all", getNewsArticles);
newsArticlesRoutes.get("/specificNews/:news_id", getSpecificNews);

newsArticlesRoutes.post("/add", upload.single("picture"), addNewsArticle);
newsArticlesRoutes.patch(
  "/edit/:id",
  upload.single("picture"),
  authMiddleware,
  updateNewsArticleById
);
newsArticlesRoutes.delete("/delete/:id", authMiddleware, updateNewsArticleById);

export default newsArticlesRoutes;
