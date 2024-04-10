import { prisma } from "../../server";
import { Request, Response } from "express";

export const getPage1Details = async (req: Request, res: Response) => {
  try {
    const basicDetails = await prisma.page1.findFirst();
    const teamMembers = await prisma.team.findMany({
      take: 3,
      include: {
        designation: {
          select: {
            type: true,
          },
        },
        post: {
          select: {
            type: true,
          },
        },
      },
    });

    const newsArticles = await prisma.newsArticles.findMany({
      take: 3,
      select: {
        id: true,
        title: true,
        content: true,
        picture: true,
        createdAt: true,
      },
    });
    const services = await prisma.services.findMany({ take: 4 });
    const page1Details = {
      basicDetails,
      teamMembers,
      newsArticles,
      services,
    };

    res.status(200).json({ page1Details });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
