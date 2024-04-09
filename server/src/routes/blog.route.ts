import express from "express"
import { authMiddleware } from "../middleware/auth.middleware";
import { addBlog, deleteBlogById, getAllBlogs, updateBlogById } from "../controller/blog-controller";



const blogsRoutes = express.Router();

blogsRoutes.get("/all", getAllBlogs)
blogsRoutes.get("/add",authMiddleware, addBlog)
blogsRoutes.patch("/edit/:id",authMiddleware, updateBlogById)
blogsRoutes.delete("/delete/:id",authMiddleware, deleteBlogById)


export default blogsRoutes;