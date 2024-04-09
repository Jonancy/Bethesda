import { prisma } from "../../server";
import { Request, Response } from "express";


 export const getTeamMembers = async (req: Request, res: Response) => {
    try {
      const teamMembers = await prisma.team.findMany({
        include: {
          designation: {
            select: {
              type: true, // Include only the 'type' field from the 'designation' relation
            },
          },
          post: {
            select: {
              type: true,
            },
          },
        },
      });

      res.status(200).json({ teamMembers });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  };

  export const addTeamMember = async (req: Request, res: Response) => {
    const {name,profile,designationId,postId } = req.body
    try {
      const teamMember = await prisma.team.create({
        data:{
          name,
          profile,
          designationId,
          postId,
        }
      })
      res.status(200).json({ teamMember });
    }catch(e){
      res.status(500).json({ error: e.message }); 
    }
  }

  // Controller function to update a team by ID
export const updateTeamMemberById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { name, postId,designationId , profile } = req.body;

  try {
    const updatedTeamMember = await prisma.team.update({
      where: {
        id: id,
      },
      data: {
        name,
        designationId,
        postId,
        profile,
      },
    });

    res.status(200).json(updatedTeamMember);
  } catch (error) {
    console.error('Error updating team member by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to delete a series by ID
export const deleteTeamMemberById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    await prisma.team.delete({
      where: {
        id: id,
      },
    });

    res.status(204).end();
  } catch (error) {
    console.error('Error deleting team by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
