import { fastifyPlugin } from "fastify-plugin"
import newClient from "../routes/client/newClient.js"
import showClient from "../routes/client/showClient.js"
import showAllClients from "../routes/client/showAllClients.js"
import updateClient from "../routes/client/updateClient.js"
import deleteClient from "../routes/client/deleteClient.js"
import newProduct from "../routes/catalog/newProduct.js"
import showProduct from "../routes/catalog/showProduct.js"

// Registrando todas as rotas
async function allRoutes(server) {
  // CLIENTES
  server.register(newClient)
  server.register(showClient)
  server.register(showAllClients)
  server.register(updateClient)
  server.register(deleteClient)
  // CATÁLOGO
  server.register(newProduct)
  server.register(showProduct)
}

export default fastifyPlugin(allRoutes)
