import newClientController from "../../controllers/newClientController.js"

export default async (server) => {
  server.post("/client/add", newClientController)
}
