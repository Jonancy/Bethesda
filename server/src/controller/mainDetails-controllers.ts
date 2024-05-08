import { Request, Response } from "express";
import { prisma } from "../../server";
import { MulterError } from "multer";

export const getAllMainDetails = async (req: Request, res: Response) => {
  try {
    const getAboutUs = await prisma.page1.findFirst();
    const mainDetails = await prisma.companyDetails.findFirst();

    let allDetails = {
      company_name: mainDetails?.company_name || "",
      phone_number: mainDetails?.phone_number || "",
      email: mainDetails?.email || "",
      logo: mainDetails?.logo || null,
      about: mainDetails?.about || "",
      copyRights: mainDetails?.copyRights || "",
      location: mainDetails?.location || "",
      hero: getAboutUs?.hero || null,
      welcome: getAboutUs?.welcome || "",
      whatWeDoImage: getAboutUs?.whatWeDoImage || null,
      whatWeDo: getAboutUs?.whatWeDo || "",
      whoWeAre: getAboutUs?.whoWeAre || "",
    };

    res.status(200).json(allDetails);
  } catch (error) {
    console.error("Error fetching all novels:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateMainDetails = async (
  req: Request & { file?: Express.Multer.File },
  res: Response
): Promise<void> => {
  try {
    const {
      company_name,
      phone_number,
      email,
      about,
      copyRights,
      location,
      welcome,
      whatWeDo,
      whoWeAre,
    } = req.body;
    console.log(req.files, "jajaj");

    //!Array ma aucha so taking out the files and then storing the path only
    const logoFiles = req.files["logo"];
    const heroFiles = req.files["hero"];
    const whatWeDoImageFiles = req.files["whatWeDoImage"];

    const baseURL = "http://localhost:3001/";

    const logo = logoFiles ? baseURL + logoFiles[0].path : null;
    const hero = heroFiles ? baseURL + heroFiles[0].path : null;
    const whatWeDoImage = whatWeDoImageFiles
      ? baseURL + whatWeDoImageFiles[0].path
      : null;

    await prisma.companyDetails.update({
      where: { id: 1 },
      data: {
        company_name,
        phone_number: parseInt(phone_number),
        logo,
        email,
        about,
        copyRights,
        location,
      },
    });

    await prisma.page1.update({
      where: { id: 1 },
      data: {
        hero,
        welcome,
        whatWeDo,
        whatWeDoImage,
        whoWeAre,
      },
    });

    res.status(200).json({ message: "Updated Successfully" });
  } catch (error) {
    if (error instanceof MulterError) {
      // Handle the Multer error
      console.error(error);
      res.status(400).json({ error: error.message });
    } else {
      // Handle other errors
      console.error("Error updating main details:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
};
