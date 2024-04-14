import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
  addBlog,
  deleteBlogById,
  getAllBlogs,
  getSpecificBlogs,
  updateBlogById,
} from "../controller/blog-controller";
import multer from "multer";

const upload = multer({ dest: "uploads/blogs" });

const blogsRoutes = express.Router();

blogsRoutes.get("/all", getAllBlogs);
blogsRoutes.post("/add", upload.single("picture"), addBlog);
blogsRoutes.get("/specificBlogs/:blog_id", getSpecificBlogs);

blogsRoutes.patch("/edit/:id", upload.single("picture"), updateBlogById);
blogsRoutes.delete("/delete/:id", authMiddleware, deleteBlogById);

export default blogsRoutes;
