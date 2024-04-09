import { Request, Response } from "express";
import { prisma } from "../../server";

export const getAllBlogs = async (req: Request, res: Response) => {

    try {
        const allBlogs = await prisma.blogs.findMany();
    
        res.status(200).json(allBlogs);
      } catch (error) {
        console.error('Error fetching all novels:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
}


export const addBlog = async (req: Request, res: Response) => {
  const { title,picture,content  } = req.body;
  try {
    const teamMember = await prisma.blogs.create({ 
      data:{
        title,
        content,
        picture,
      }
    })
    res.status(200).json({ teamMember });
  }catch(e){
    res.status(500).json({ error: e.message }); 
  }
}

// Controller function to update a team by ID
export const updateBlogById = async (req: Request, res: Response): Promise<void> => {
const { id } = req.params;
const { title,picture,content  } = req.body;

try {
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

  res.status(200).json(updatedBlog);
} catch (error) {
  console.error('Error updating blog by ID:', error);
  res.status(500).json({ error: 'Internal server error' });
}
};

// Controller function to delete a series by ID
export const deleteBlogById = async (req: Request, res: Response): Promise<void> => {
const { id } = req.params;

try {
  await prisma.blogs.delete({
    where: {
      id: id,
    },
  });

  res.status(204).end();
} catch (error) {
  console.error('Error deleting blog by ID:', error);
  res.status(500).json({ error: 'Internal server error' });
}
};
