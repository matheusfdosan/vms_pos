import newClientController from "../../controllers/newClientController.js"

export default async (fastify) => {
  fastify.post("/client/add", newClientController)
}
