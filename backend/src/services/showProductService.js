import { sql } from "../configs/database.js"

export default async function showProductService(productId) {
  try {
    const product = await sql`SELECT * FROM product WHERE id = ${productId}`
    return {
      status: 200,
      message: "Product successfully obtained!",
      body: product,
    }
  } catch (err) {
    if (err) throw {status: 400, message: "Error to obtain product! " + err}
  }
}
