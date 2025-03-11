import showAllProductsService from "../services/showAllProductsService.js"

export default async (req, res) => {
  const response = await showAllProductsService()
  return response
}