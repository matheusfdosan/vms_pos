import updateProductsService from "../services/updateProductService.js"

export default async (req, res) => {
  const productId = req.params.id
  const updatedInfo = req.body

  const response = await updateProductsService(productId, updatedInfo)
  return response
}