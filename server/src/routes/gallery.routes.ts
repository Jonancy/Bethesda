import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import multer from "multer";
import {
  getAllGallery,
  getGallery,
  updateGallery,
} from "../controller/gallery-controller";

const upload = multer({ dest: "uploads/gallery" });

const galleryRoutes = express.Router();

galleryRoutes.get("/all", getAllGallery);
galleryRoutes.get("/allAdmin", getGallery);

galleryRoutes.patch("/update", upload.array("gallery", 30), updateGallery);

export default galleryRoutes;
