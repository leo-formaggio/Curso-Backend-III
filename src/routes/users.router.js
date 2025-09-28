import UserModel from "../models/User.js"
import { Router } from "express"

const router = Router()

router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.delete("/", async (req, res) => {
  try {
    await UserModel.deleteMany({})
    res.json({ message: "Todos os usuários deletados" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router