import fastify from "fastify"
const server = fastify({ logger: true })
import { PORT } from "./envVariables.js"

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
