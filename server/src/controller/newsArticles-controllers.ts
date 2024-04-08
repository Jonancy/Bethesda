import { Request, Response, NextFunction } from "express";
import { prisma } from "../../server";

class NewsArticlesController {
  getNewsArticles = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getAllArticles = await prisma.newsAtricles.findMany();

     return  res.status(200).json({ getAllArticles });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  };
}


const newsAtriclesController = new NewsArticlesController();
export default newsAtriclesController;