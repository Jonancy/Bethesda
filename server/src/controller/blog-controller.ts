import { Request, Response } from "express";
import { prisma } from "../../server";

export const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const allBlogs = await prisma.blogs.findMany();

    res.status(200).json(allBlogs);
  } catch (error) {
    console.error("Error fetching all novels:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getSpecificBlogs = async (req: Request, res: Response) => {
  try {
    const blog_id = req.params.blog_id;
    console.log(blog_id, "jsjs");

    const specificBlogs = await prisma.blogs.findUnique({
      where: { id: blog_id },
    });
    //!For recommendations
    const otherBlogs = await prisma.blogs.findMany({
      where: { id: { not: blog_id } },
    });

    const allBlogs = {
      specificBlogs,
      otherBlogs,
    };
    res.status(200).json(allBlogs);
  } catch (error) {
    console.error("Error fetching all novels:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const addBlog = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  try {
    let pictureFile = req.file;
    console.log(req.file);
    const baseURL = "http://localhost:3001/";

    const picture = pictureFile ? baseURL + pictureFile.path : null;
    const teamMember = await prisma.blogs.create({
      data: {
        title,
        content,
        picture,
      },
    });
    res.status(200).json({ message: "Blogs posted successfully!" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// Controller function to update a team by ID
export const updateBlogById = async (
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
    const updatedBlog = await prisma.blogs.update({
      where: {
        id: id,
      },
      data: {
        title,
        content,
        picture,
      },
    });

    res.status(200).json({ message: "Blogs updated successfully!" });
  } catch (error) {
    console.error("Error updating blog by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller function to delete a series by ID
export const deleteBlogById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    await prisma.blogs.delete({
      where: {
        id: id,
      },
    });

    res.status(200).json({ message: "Blogs deleted successfully!" });
  } catch (error) {
    console.error("Error deleting blog by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
