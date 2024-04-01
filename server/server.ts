import express from "express"
import dotenv from "dotenv"
import { PrismaClient } from "@prisma/client";

const app = express()

dotenv.config()


app.use(express.json());

export const prisma = new PrismaClient()

// app.use("/api", rootRouter);


app.listen(6000,()=>{
    console.log("connected");
    
})