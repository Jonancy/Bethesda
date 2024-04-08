import { prisma } from "../../server";
import { Request, Response } from "express";

class TeamMembersController {
  getTeamMembers = async (req: Request, res: Response) => {
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
}

const teamMembersController = new TeamMembersController();

export default teamMembersController;
