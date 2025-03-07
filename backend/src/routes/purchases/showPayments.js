import showAllPurchases from "../../controllers/showPurchaseController.js"

export default async (server) => {
  server.get("/purchase/all", showAllPurchases)
}
