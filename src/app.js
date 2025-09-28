import mocksRouter from "./routes/mocks.router.js"
import usersRouter from "./routes/users.router.js"
import petsRouter from "./routes/pets.router.js"

import { connectDB } from "./config/db.js"
import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
app.use(express.json())

connectDB()

app.use("/api/mocks", mocksRouter)
app.use("/api/users", usersRouter)
app.use("/api/pets", petsRouter)

app.listen(8080, () => console.log("Servidor rodando na porta 8080"))