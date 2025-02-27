import { fastifyPlugin } from "fastify-plugin"
import newClient from "../routes/client/newClient.js"
import showClient from "../routes/client/showClient.js"
import showAllClients from "../routes/client/showAllClients.js"
import updateClient from "../routes/client/updateClient.js"

// Registrando todas as rotas
async function allRoutes(server) {
  server.register(newClient)
  server.register(showClient)
  server.register(showAllClients)
  server.register(updateClient)
}

export default fastifyPlugin(allRoutes)
