import express from "express"
import { PrismaClient } from "@prisma/client"

const router = express.Router()
const prisma = new PrismaClient()

router.get("/hijosGet", async (req, res) => {
  const { username } = req.query;

  if (!username) {
    res.status(400).json({ error: "faltan datos" });
    return;
  }
  
  const user = await prisma.user.findUnique({
    where: {
      username: username as string,
    },
    select: {
      numHijos: true,
      username: true,
    },
  });
  
  if (!user) {
    res.status(404).json({ error: "usuario no encontrado" });
    return;
  }
  
  res.status(200).json({ user });
});

export default router;