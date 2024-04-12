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

const rootRouter = Router();

rootRouter.use("/user", userRoutes);
rootRouter.use("/team-member", teamMemberRoutes);
rootRouter.use("/news-article", newsArticlesRoutes);
rootRouter.use("/page-one", pageOneRoutes);
rootRouter.use("/blogs", blogsRoutes);
rootRouter.use("/about-us", aboutUsRoutes);
rootRouter.use("/service", serviceRoutes);
rootRouter.use("/gallery", galleryRoutes);

//!For updating on the dashboard all small details like hero,images, contact numbers
rootRouter.use("/mainDetails", mainDetailsRoutes);

export default rootRouter;
