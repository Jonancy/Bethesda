import { Request, Response } from "express";
import { prisma } from "../../server";

export const getAllServices = async (req: Request, res: Response) => {
  try {
    const allServices = await prisma.services.findMany();

    res.status(200).json(allServices);
  } catch (error) {
    console.error("Error fetching all services:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getSpecificService = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const specificService = await prisma.services.findUnique({
      where: { id: id },
    });
    //!For recommendations
    const otherServices = await prisma.services.findMany({
      where: { id: { not: id } },
    });

    const allServices = {
      specificService,
      otherServices,
    };
    res.status(200).json(allServices);
  } catch (error) {
    console.error("Error fetching all services:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const addServices = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  try {
    let pictureFile = req.file;
    console.log(req.file);
    const baseURL = "http://localhost:3001/";

    const picture = pictureFile ? baseURL + pictureFile.path : null;
    await prisma.services.create({
      data: {
        title,
        content,
        picture,
      },
    });
    res.status(200).json({ message: "Services added successfully!" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// Controller function to update a team by ID
export const updateServiceById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    let pictureFile = req.file;
    console.log(req.file);
    const baseURL = "http://localhost:3001/";

    const picture = pictureFile ? baseURL + pictureFile.path : null;
    const updatedBlog = await prisma.services.update({
      where: {
        id: id,
      },
      data: {
        title,
        content,
        picture,
      },
    });

    res.status(200).json({ message: "Services updated successfully!" });
  } catch (error) {
    console.error("Error updating blog by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller function to delete a series by ID
export const deleteServiceById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    await prisma.services.delete({
      where: {
        id: id,
      },
    });

    res.status(200).json({ message: "Service deleted successfully!" });
  } catch (error) {
    console.error("Error deleting blog by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
