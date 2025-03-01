import { sql } from "../configs/database.js"

export default async function deleteProductService(productId) {
  try {
    await sql`DELETE FROM product WHERE id = ${productId}`
    return { status: 200, message: "Product successfully deleted!" }
  } catch (err) {
    if (err) throw { status: 400, message: "Error to delete product!" + err }
  }
}
