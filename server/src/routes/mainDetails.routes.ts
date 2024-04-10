import express from "express";
import {
  getAllMainDetails,
  updateMainDetails,
} from "../controller/mainDetails-controllers";
import multer from "multer";

const upload = multer({ dest: "uploads/company" });

const mainDetailsRoutes = express.Router();

mainDetailsRoutes.get("/getAllDetails", getAllMainDetails);

//!Multiple files aucha so instead of adding single adding all at a once through multer
mainDetailsRoutes.patch(
  "/updateMainDetails",
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "hero", maxCount: 1 }, 
    { name: "whatWeDoImage", maxCount: 1 }, 
  ]),
  updateMainDetails
);

export default mainDetailsRoutes;
