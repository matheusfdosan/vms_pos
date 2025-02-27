import deleteUserService from "../services/deleteUserService.js"

export default async (req, res) => {
  const clientCPF = req.params.id

  const response = await deleteUserService(clientCPF)
  return response
}