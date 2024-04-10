import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import multer from "multer";
import {
  addServices,
  deleteServiceById,
  getAllServices,
  getSpecificService,
  updateServiceById,
} from "../controller/services-controller";

const upload = multer({ dest: "uploads/services" });

const serviceRoutes = express.Router();

serviceRoutes.get("/all", getAllServices);
serviceRoutes.post("/add", upload.single("picture"), addServices);
serviceRoutes.get("/specificService/:id", getSpecificService);

serviceRoutes.patch("/edit/:id", upload.single("picture"), updateServiceById);
serviceRoutes.delete("/delete/:id", authMiddleware, deleteServiceById);

export default serviceRoutes;
