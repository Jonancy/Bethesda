import { Request, Response, NextFunction } from "express";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { prisma } from "../../server";
import { JWT_SECRET } from "../../secrets";


export const login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
  
      const user = await prisma.user.findUnique({ where: { username } });
      if (!user) {
        return res.status(400).json({ error: "User doesn't exist" });
      }
  
      const isPasswordValid = (await bcrypt.compare(password, user.password));
      if (!isPasswordValid) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
  
      // Return limited user data and token as JSON response
      const limitedUserData = {
        username: user.username,
        email: user.email,
      };
      const token = jwt.sign({ userId: user.id }, JWT_SECRET || "");
  
      // Return limited user data and token as JSON response
      res.json({ user: user, token , Avatar:user });
      
    } catch (error) {
      // Handle errors gracefully
      res.status(500).json({ error: error.message });
    }
  };