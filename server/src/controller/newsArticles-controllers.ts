import { Request, Response, NextFunction } from "express";
import { prisma } from "../../server";


export const getNewsArticles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const getAllArticles = await prisma.newsArticles.findMany();

    return res.status(200).json({ getAllArticles });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};


// Controller function to add a news article
export const addNewsArticle = async (req: Request, res: Response, next: NextFunction) => {
  const { title, content, picture } = req.body;
  try {
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
}

// Controller function to update a news article by ID
export const updateNewsArticleById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params;
  const { title, content, picture } = req.body;

  try {
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
    console.error('Error updating news article by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Controller function to delete a news article by ID
export const deleteNewsArticle = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;

  try {
    await prisma.newsArticles.delete({
      where: {
        id: id,
      },
    });

    res.status(200).json({ message: 'News article deleted successfully' });
  } catch (error) {
    console.error('Error deleting news article by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

