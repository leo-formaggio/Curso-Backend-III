import PetModel from "../models/Pet.js"
import { Router } from "express"

const router = Router()

router.get("/", async (req, res) => {
  try {
    const pets = await PetModel.find()
    res.json(pets)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.delete("/", async (req, res) => {
  try {
    await PetModel.deleteMany({})
    res.json({ message: "Todos os pets deletados" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router