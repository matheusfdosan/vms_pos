import newClientController from "../../controllers/showPurchaseController.js"

export default async (server) => {
  server.post("/purchase/show", newClientController)
}
