import { faker } from "@faker-js/faker"
import bcrypt from "bcrypt"

export function generateUsers(num) {
  const users = []
  const passwordHash = bcrypt.hashSync("coder123", 10)

  for (let i = 0; i < num; i++) {
    users.push({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: passwordHash,
      role: faker.helpers.arrayElement(["user", "admin"]),
      pets: [],
      dni: faker.string.numeric(8)
    })
  }

  return users
}