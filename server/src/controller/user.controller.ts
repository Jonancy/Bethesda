import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../../server";
import { JWT_SECRET } from "../../secrets";

export const login = async (req: Request, res: Response) => {
  try {
    console.log(req.body, "this is the body");
    const { username, password } = req.body;

    console.log(username, password, "this is the username and password");

    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
      console.log("erroororrroroor no userrrr");
      return res.status(400).json({ error: "User doesn't exist" });
    }

    const isPasswordValid = await prisma.user.findFirst({
      where: { username, password },
    });
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const limitedUserData = {
      username: user.username,
    };

    const token = jwt.sign({ userId: user.id }, JWT_SECRET || "");

    // Return limited user data and token as JSON response
    res.json({ user: limitedUserData, token });
  } catch (error) {
    // Handle errors gracefully
    res.status(500).json({ error: error.message });
  }
};

export const getCurrentUserProfile = async (req: Request, res: Response) => {
  try {
    const { username } = req.user;
    const user = await prisma.user.findUnique({
      where: { username },
      select: {
        id: true,
        username: true,
      },
    });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({ where: { id: id } });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.delete({ where: { id: id } });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
