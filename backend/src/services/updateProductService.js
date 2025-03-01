import { sql } from "../configs/database.js"

export default async function updateProductService(productId, updatedInfo) {
  const { img, name, price, stock } = updatedInfo

  try {
    await sql`UPDATE product SET img = ${img}, name = ${name}, price = ${price}, stock = ${stock} WHERE id = ${productId}`
    return {
      status: 200,
      message: "Product successfully updated!",
    }
  } catch (err) {
    if (err) throw { status: 400, message: "Error to update product!" + err }
  }
}
