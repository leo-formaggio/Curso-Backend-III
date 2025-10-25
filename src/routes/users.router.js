import UserModel from "../models/User.js"
import { Router } from "express"

const router = Router()

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operações com usuários
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         first_name:
 *           type: string
 *         last_name:
 *           type: string
 *         email:
 *           type: string
 *         role:
 *           type: string
 *         pets:
 *           type: array
 *           items:
 *             type: string
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

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