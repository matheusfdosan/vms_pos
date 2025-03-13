import showAllClientsController from "../../controllers/showAllClientsController.js"

export default async (server) => {
  server.get("/client/all", showAllClientsController)
}