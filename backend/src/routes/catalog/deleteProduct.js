import deleteProductController from "../../controllers/deleteProductController.js"

export default async (server) => {
  server.delete("/product/:id", deleteProductController)
} 