import { Request, Response } from "express";
import { prisma } from "../../server";

//!For client
export const getAllGallery = async (req: Request, res: Response) => {
  try {
    const { page } = req.query;
    const pageNumber = typeof page === "string" ? parseInt(page, 10) : 1;
    const limit = 4;
    const offset = (pageNumber - 1) * limit;

    const allGallery = await prisma.gallery.findMany({
      skip: offset,
      take: limit,
    });

    res.status(200).json(allGallery);
  } catch (error) {
    console.error("Error fetching all gallery:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//!For admin
export const getGallery = async (req: Request, res: Response) => {
  try {
    const allGallery = await prisma.gallery.findMany();

    res.status(200).json(allGallery);
  } catch (error) {
    console.error("Error fetching all gallery:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateGallery = async (req: Request, res: Response) => {
  try {
    //!For requesting files returned from multer
    const files = req.files as Express.Multer.File[];
    const baseURL = "http://localhost:3001/";

    const imagePaths = files.map((file) => baseURL + file.path);
    await prisma.gallery.deleteMany();

    await Promise.all(
      imagePaths.map(async (imagePath) => {
        return prisma.gallery.create({
          data: {
            image: imagePath,
          },
        });
      })
    );
    res.status(200).json({ message: "Gallery updated successfully!" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
