import { PrismaClient } from "@prisma/client";
import express from "express"
import rootRouter from "./src/routes/index.route";
import cors from "cors";


const app = express()

export const prisma = new PrismaClient()

app.use(cors({
    origin: "http://localhost:5000",
    credentials: true
  }));

app.use(express.json());
app.use("/api/v1", rootRouter);


app.listen(3001,()=>{
    console.log("connected");
})