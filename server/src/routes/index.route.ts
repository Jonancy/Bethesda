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

/**
 * @swagger
 * /api/v1/contact-us:
 *   post:
 *     summary: Send a contact us message
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ContactUsRequest'
 *     responses:
 *       201:
 *         description: Mail sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ContactUsResponse'
 *       500:
 *         description: Internal server error
 *
 * @swagger
 * components:
 *   schemas:
 *     ContactUsRequest:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         email:
 *           type: string
 *         message:
 *           type: string
 *     ContactUsResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 */
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
