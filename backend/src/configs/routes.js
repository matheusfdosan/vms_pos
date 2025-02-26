import { fastifyPlugin } from "fastify-plugin"
import newClient from "../routes/client/newClient.js"

// Registrando todas as rotas
async function allRoutes(server) {
  server.register(newClient)
}

export default fastifyPlugin(allRoutes)
