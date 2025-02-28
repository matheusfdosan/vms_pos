import newProductService from "../services/newProductService.js"

export default async (req, res) => {
  const productsData = req.body

  const response = newProductService(productsData)
  return response
}