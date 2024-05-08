import { prisma } from "../../server";
import { Request, Response } from "express";

export const getTeamMembers = async (req: Request, res: Response) => {
  try {
    const teamMembers = await prisma.team.findMany({
      select: {
        id: true,
        name: true,
        profile: true,
        post: true,
        designation: true,
      },
    });

    res.status(200).json({ teamMembers });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const addTeamMember = async (req: Request, res: Response) => {
  const { name, designation, post } = req.body;
  try {
    console.log(req.body);
    let pictureFile = req.file;
    console.log(req.file);
    const baseURL = "http://localhost:3001/";

    const profile = pictureFile ? baseURL + pictureFile.path : null;

    const teamMember = await prisma.team.create({
      data: {
        name,
        profile,
        designation,
        post,
      },
    });
    res.status(200).json({ teamMember });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// Controller function to update a team by ID
export const updateTeamMemberById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { name, post, designation } = req.body;

  try {
    let pictureFile = req.file;

    const baseURL = "http://localhost:3001/";

    const profile = pictureFile ? baseURL + pictureFile.path : null;
    const updatedTeamMember = await prisma.team.update({
      where: {
        id: id,
      },
      data: {
        name,
        designation,
        post,
        profile,
      },
    });

    res.status(200).json(updatedTeamMember);
  } catch (error) {
    console.error("Error updating team member by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getSpecificMember = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const specificMember = await prisma.team.findUnique({
      where: { id: id },
    });

    res.status(200).json(specificMember);
  } catch (error) {
    console.error("Error fetching all novels:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
// Controller function to delete a series by ID
export const deleteTeamMemberById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    await prisma.team.delete({
      where: {
        id: id,
      },
    });

    res.status(204).end();
  } catch (error) {
    console.error("Error deleting team by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
