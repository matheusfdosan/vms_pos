import newClientController from "../../controllers/showPurchaseController.js"

export default async (server) => {
  server.get("/purchase/show", newClientController)
}
