import { fastifyPlugin } from "fastify-plugin"
import newClient from "../routes/client/newClient.js"
import showClient from "../routes/client/showClient.js"

// Registrando todas as rotas
async function allRoutes(server) {
  server.register(newClient)
  server.register(showClient)
}


export default fastifyPlugin(allRoutes)
