import showProductController from "../../controllers/showProductController.js"

export default async (server) => {
  server.get("/product/:id", showProductController)
}
