import updateProductController from "../../controllers/updateProductController.js"

export default async (server) => {
  server.put("/product/:id", updateProductController)
}