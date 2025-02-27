import showAllClientsService from "../services/showAllClientsService.js"

export default async (req, res) => {
  const allUsers = await showAllClientsService()
  return allUsers
}