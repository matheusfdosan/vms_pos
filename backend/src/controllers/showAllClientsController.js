import showAllClientsService from "../services/showAllClientsService.js"

export default async function showAllClientsController(req, res) {
  const allUsers = await showAllClientsService()
  return allUsers
}