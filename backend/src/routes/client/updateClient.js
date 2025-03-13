import updateClientController from "../../controllers/updateClientController.js"

export default async (server) => {
  server.put("/client/:id", updateClientController)
}