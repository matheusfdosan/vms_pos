import deletePurchase from "../../controllers/deletePurchaseController.js"

export default async (server) => {
  server.delete("/purchase/delete", deletePurchase)
}
