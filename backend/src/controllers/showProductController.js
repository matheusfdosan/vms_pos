import showProductService from "../services/showProductService.js"

export default async (req, res) => {
  const productId = req.params.id

  const response = await showProductService(productId)
  return response
} 