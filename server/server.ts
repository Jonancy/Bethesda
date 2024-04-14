import { PrismaClient } from "@prisma/client";
import express from "express";
import rootRouter from "./src/routes/index.route";
import cors from "cors";

const app = express();

export const prisma = new PrismaClient();

// app.use(
//   cors({
//     origin: "http://localhost:5001",
//     credentials: true,
//   })
// );
app.use(cors());

//!This middleware is used to handle the incoming request from the front so that it will allow the images to display at the front
//!Note should need multer@types and multer installed in ts
//!Should need inerface also for requesting multipart form datas basically for files
app.use("/uploads/blogs", express.static("uploads/blogs"));
app.use("/uploads/company", express.static("uploads/company"));
app.use("/uploads/services", express.static("uploads/services"));
app.use("/uploads/team", express.static("uploads/team"));
app.use("/uploads/news", express.static("uploads/news"));
app.use("/uploads/gallery", express.static("uploads/gallery"));

app.use(express.json());
app.use("/api/v1", rootRouter);

app.listen(3001, () => {
  console.log("connected");
});
