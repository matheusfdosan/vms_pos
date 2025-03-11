import fastify from "fastify"
const server = fastify({ logger: true })
import { PORT } from "../envVariables.js"
import allRoutes from "./configs/routes.js"
import corsConfigs from "./configs/cors.js"

// Registrando todas as rotas
server.register(allRoutes)
server.register(corsConfigs)

server.listen(
  {
    port: PORT,
    host: "0.0.0.0",
  },
  (err) => {
    if (err) throw err
    console.log("Servidor rodando na porta", PORT)
  }
)
