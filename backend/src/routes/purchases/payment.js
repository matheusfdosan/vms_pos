import newPurchaseController from "../../controllers/newPurchaseController.js"

export default async (server) => {
  server.post("/purchase/add", newPurchaseController)
}
