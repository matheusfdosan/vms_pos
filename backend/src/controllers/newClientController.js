import newClientService from "../services/newClientService.js"

export default async (req, res) => {
  const userData = req.body

  const response = await newClientService(userData)
  return response
}
