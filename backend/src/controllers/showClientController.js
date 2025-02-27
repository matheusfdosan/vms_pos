import showClientService from "../services/showClientService.js"

export default async (req, res) => {
  const clientCPF = req.params.id

  const response = await showClientService(clientCPF)
  return response
}
