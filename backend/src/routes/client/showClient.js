import showClientController from "../../controllers/showClientController.js"

export default async (fastify) => {
  fastify.get("/client/:id", showClientController)
}
