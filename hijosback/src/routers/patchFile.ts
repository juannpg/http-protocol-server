import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/get", async (req, res) => {
  const { username, numHijosNew } = req.query;

  if (!username || !numHijosNew) {
    res.status(400).json({ error: "faltan datos" });
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
    res.status(404).json({ error: "usuario no encontrado" });
    return;
  }

  res.status(200).json({ user, message: "Usuario encontrado" });
});

// if usuario encontrado
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

  res.status(200).json({ updatedUser, message: "Hijos actualizados" });
});

export default router;