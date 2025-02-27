import showClientController from "../../controllers/showClientController.js"

export default async (server) => {
  server.get("/client/:id", showClientController)
}
