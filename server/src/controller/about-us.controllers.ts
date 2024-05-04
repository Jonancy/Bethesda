import { Request, Response, NextFunction } from "express";
import { prisma } from "../../server";

export const getAboutUsDetails = async (req: Request, res: Response) => {
  try {
    const getAboutUs = await prisma.page1.findFirst();
    const teamMembers = await prisma.team.findMany();
    const aboutUs = await prisma.companyDetails.findFirst({
      select: {
        about: true,
      },
    });
    let aboutUsDetails = {
      whoWeAre: getAboutUs.whoWeAre,
      whatWeDoImage: getAboutUs.whatWeDoImage,
      whatWeDo: getAboutUs.whatWeDo,
      aboutUs: aboutUs.about,
      teamMembers,
    };
    return res.status(200).json({ aboutUsDetails });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
