import { Request, Response, NextFunction } from "express";
import { prisma } from "../../server";

export const getNewsArticles = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const getAllArticles = await prisma.newsArticles.findMany();

    return res.status(200).json({ getAllArticles });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// Controller function to add a news article
export const addNewsArticle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, content } = req.body;
  try {
    let pictureFile = req.file;
    console.log(req.file);
    const baseURL = "http://localhost:3001/";

    const picture = pictureFile ? baseURL + pictureFile.path : null;

    const newsArticle = await prisma.newsArticles.create({
      data: {
        title,
        content,
        picture,
      },
    });
    res.status(200).json({ newsArticle });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// Controller function to update a news article by ID
export const updateNewsArticleById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    let pictureFile = req.file;
    console.log(req.file);
    const baseURL = "http://localhost:3001/";

    const picture = pictureFile ? baseURL + pictureFile.path : null;
    const updatedNewsArticle = await prisma.newsArticles.update({
      where: {
        id: id,
      },
      data: {
        title,
        content,
        picture,
      },
    });

    res.status(200).json(updatedNewsArticle);
  } catch (error) {
    console.error("Error updating news article by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getSpecificNews = async (req: Request, res: Response) => {
  try {
    const { news_id } = req.params;
    console.log(news_id, "kaka");

    const specificNews = await prisma.newsArticles.findUnique({
      where: { id: news_id },
    });
    //!For recommendations
    const otherNews = await prisma.newsArticles.findMany({
      where: { id: { not: news_id } },
    });

    const allNews = {
      specificNews,
      otherNews,
    };
    res.status(200).json(allNews);
  } catch (error) {
    console.error("Error fetching all news:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller function to delete a news article by ID
export const deleteNewsArticle = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    await prisma.newsArticles.delete({
      where: {
        id: id,
      },
    });

    res.status(200).json({ message: "News article deleted successfully" });
  } catch (error) {
    console.error("Error deleting news article by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
