import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

router.delete("/delete", async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    res.status(400).json({ error: "faltan datos" });
    return;
  }

  const user = await prisma.user.delete({
    where: {
      username: username,
      password: password
    }
  })
  if (!user) {
    res.status(404).json({ error: "usuario no encontrado" });
    return;
  }

  res.status(200).json({ message: "usuario eliminado" });
})

export default router