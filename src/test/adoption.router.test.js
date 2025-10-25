import { connect, closeDatabase, clearDatabase } from "./setupTestDB.js"
import AdoptionModel from "../src/models/Adoption.js"
import request from "supertest"
import app from "../src/app.js"

beforeAll(async () => {
  await connect()
})

afterEach(async () => {
  await clearDatabase()
})

afterAll(async () => {
  await closeDatabase()
})

describe("Adoption Router - funcional", () => {

  test("GET /api/adoptions - deve retornar array (vazio inicialmente)", async () => {
    const res = await request(app).get("/api/adoptions")
    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })

  test("POST /api/adoptions - deve criar uma adoção", async () => {
    const newAdoption = { petId: "abc123", userId: "u1", date: "2025-01-01" }
    const res = await request(app)
      .post("/api/adoptions")
      .send(newAdoption)

    expect(res.statusCode).toBe(201)
    expect(res.body).toHaveProperty("_id")
    expect(res.body.petId).toBe(newAdoption.petId)
  })

  test("GET /api/adoptions/:id - deve retornar adoção criada", async () => {
    const doc = await AdoptionModel.create({ petId: "p1", userId: "u2", date: "2025-01-02" })
    const res = await request(app).get(`/api/adoptions/${doc._id}`)
    expect(res.statusCode).toBe(200)
    expect(res.body._id).toBe(String(doc._id))
  })

  test("PUT /api/adoptions/:id - deve atualizar", async () => {
    const doc = await AdoptionModel.create({ petId: "p1", userId: "u2", date: "2025-01-02" })
    const res = await request(app)
      .put(`/api/adoptions/${doc._id}`)
      .send({ status: "completed" })

    expect(res.statusCode).toBe(200)
    expect(res.body.status).toBe("completed")
  })

  test("DELETE /api/adoptions/:id - deve deletar", async () => {
    const doc = await AdoptionModel.create({ petId: "p1", userId: "u2", date: "2025-01-02" })
    const res = await request(app).delete(`/api/adoptions/${doc._id}`)
    expect(res.statusCode).toBe(200)
    
    const find = await AdoptionModel.findById(doc._id)
    expect(find).toBeNull();
  })

})