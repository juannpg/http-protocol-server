import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

router.post("/post", async (req, res) => {
  const { numHijos, username, password } = req.body;

  if (!numHijos || !username || !password) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }
  
  await prisma.user.create({
    data: {
      numHijos: numHijos,
      username: username,
      password: password,
    },
  });
  
  res.status(200).json({ message: "User created successfully" });
});

export default router;