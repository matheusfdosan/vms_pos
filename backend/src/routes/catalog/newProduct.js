import newProductController from "../../controllers/newProductController.js"

export default async (server) => {
  server.post("/product/add", newProductController)
}