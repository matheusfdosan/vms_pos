import { fastifyPlugin } from "fastify-plugin"
// IMPORTAÇÕES DOS CLIENTES 
import newClient from "../routes/client/newClient.js"
import showClient from "../routes/client/showClient.js"
import showAllClients from "../routes/client/showAllClients.js"
import updateClient from "../routes/client/updateClient.js"
import deleteClient from "../routes/client/deleteClient.js"

// IMPORTAÇÕES DOS PRODUTOS 
import newProduct from "../routes/catalog/newProduct.js"
import showProduct from "../routes/catalog/showProduct.js"
import showAllProducts from "../routes/catalog/showAllProducts.js"
import updateProduct from "../routes/catalog/updateProduct.js"
import deleteProduct from "../routes/catalog/deleteProduct.js"

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
  server.register(showAllProducts)
  server.register(updateProduct)
  server.register(deleteProduct)
}

export default fastifyPlugin(allRoutes)
