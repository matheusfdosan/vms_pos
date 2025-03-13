import showAllProductsController from "../../controllers/showAllProductsController.js";

export default async (server) => {
  server.get("/product/all", showAllProductsController)
}