import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

router.post("/hijosPost", async (req, res) => {
  const { numHijos, username } = req.body;

  if (!numHijos) {
    res.status(400).json({ error: "faltan datos" });
    return;
  }
  
  await prisma.user.create({
    data: {
      numHijos: numHijos,
      username: username,
    },
  });
  
  res.status(200).json({ message: "Hijos creados" });
});

export default router;