import swaggerJSDoc from "swagger-jsdoc"

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API - Backcoder",
      version: "1.0.0",
      description: "Documentação Swagger do módulo Users"
    },
    servers: [
      { url: "http://localhost:8080", description: "Local" }
    ]
  },
  apis: ["./src/routes/*.js", "./src/models/*.js"]
}

export const swaggerSpec = swaggerJSDoc(options)