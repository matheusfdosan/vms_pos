import updateClientService from "../services/updateClientService.js"

export default async (req, res) => {
  const clientCPF = req.params.id
  const updatedInfo = req.body

  const response = await updateClientService(clientCPF, updatedInfo)
  return response
}