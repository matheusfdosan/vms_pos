import { sql } from "../configs/database.js"

export default async function showAllProductsService() {
  try {
    const response = await sql`SELECT * FROM product`
    return {
      status: 200,
      message: "All Products Sucessfuly Obtained",
      body: response,
    }
  } catch (err) {
    if (err)
      throw { status: 400, message: "Erro to obtain all products! " + err }
  }
}
