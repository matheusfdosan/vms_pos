import deleteProductService from "../services/deleteProductService.js"

export default async (req, res) => {
  const productId = req.params.id

  const response = await deleteProductService(productId)
  return response
}