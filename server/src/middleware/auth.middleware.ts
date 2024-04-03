import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../secrets";
import { prisma } from "../../server";


 const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
        throw new Error("Token is required");
        }
        console.log(token,"wowtoken");
        const [bearer, t] = token.split(" ");
        const payload = jwt.verify(t,JWT_SECRET) as any;
        console.log(payload,"this is samir");

         const user = await prisma.user.findFirst({where:{id : payload.userId}}); 
         console.log(user,"this is colin");

        if (!user) {
            throw new Error("User not found");
        }
        req.user = user;
        next();
    } catch (err) {
        next(err);
    }
    };

    // const adminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    //     const user = req.user;

    //     if (user.role !== "ADMIN") {
    //         return res.status(403).json({ error: "Unauthorized" });
    //     }

    //     next();
    // }

export { authMiddleware};