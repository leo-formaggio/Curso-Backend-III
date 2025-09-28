import { generateUsers } from "../utils/mocking.js"
import UserModel from "../models/User.js"
import PetModel from "../models/Pet.js"
import { Router } from "express"

const router = Router()

router.get("/mockingpets", async (req, res) => {
  const pets = [
    { name: "Rex", species: "dog" },
    { name: "Mingal", species: "cat" },
  ]
  res.json(pets)
})

router.get("/mockingusers", (req, res) => {
  const users = generateUsers(50)
  res.json(users)
})

router.post("/generateData", async (req, res) => {
  const { users, pets } = req.body

  try {
    if (users) {
      const newUsers = generateUsers(users)
      await UserModel.insertMany(newUsers)
    }

    if (pets) {
      const newPets = []
      for (let i = 0; i < pets; i++) {
        newPets.push({ name: `Pet${i}`, species: "dog" })
      }
      await PetModel.insertMany(newPets)
    }

    res.json({ message: "Dados gerados com sucesso!" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router