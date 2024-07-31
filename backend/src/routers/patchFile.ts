import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/get", async (req, res) => {
  const { username, numHijosNew } = req.query;

  if (!username || !numHijosNew) {
    res.status(400).json({ error: "missing required fields" });
    return;
  }

  const user = await prisma.user.findUnique({
    where: {
      username: username as string,
    },
    select: {
      username: true,
      numHijos: true,
    },
  });

  if (!user) {
    res.status(404).json({ error: "user not found" });
    return;
  }

  res.status(200).json({ user, message: "use found" });
});

// if user found
router.patch("/patch", async (req, res) => {
  const { username, numHijosNew } = req.body;
  const numHijosNewParsed = parseInt(numHijosNew as string);

  const updatedUser = await prisma.user.update({
    where: {
      username: username as string,
    },
    data: {
      numHijos: numHijosNewParsed as number,
    },
  });

  res.status(200).json({ updatedUser, message: "Cuantity of children updated successfully" });
});

export default router;