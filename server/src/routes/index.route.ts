import { Router } from "express";
import userRoutes from "./user.route";
import teamMemberRoutes from "./teamMembers.route";
import newsArticlesRoutes from "./newsArtilces.route";
import pageOneRoutes from "./pageone.route";
import blogsRoutes from "./blog.route";
import aboutUsRoutes from "./aboutUs.routes";
import mainDetailsRoutes from "./mainDetails.routes";
import serviceRoutes from "./services.routes";
import galleryRoutes from "./gallery.routes";
import { Request, Response } from "express";
import { sendMail } from "../mail/mailSender";

const rootRouter = Router();

rootRouter.use("/user", userRoutes);
rootRouter.use("/team-member", teamMemberRoutes);
rootRouter.use("/news-article", newsArticlesRoutes);
rootRouter.use("/page-one", pageOneRoutes);
rootRouter.use("/blogs", blogsRoutes);
rootRouter.use("/about-us", aboutUsRoutes);
rootRouter.use("/service", serviceRoutes);
rootRouter.use("/gallery", galleryRoutes);

rootRouter.post("/contact-us", async (req: Request, res: Response) => {
  const { firstName, lastName, email, message } = req.body;
  console.log(req.body);

  const mail = await sendMail(
    email,
    "Contact us",
    `Sent by: ${firstName}${lastName}, ${message}`
  );

  res.status(201).json({ message: "Mail sent successfully!" });
});
//!For updating on the dashboard all small details like hero,images, contact numbers
rootRouter.use("/mainDetails", mainDetailsRoutes);

export default rootRouter;
