import { sql } from "../configs/database.js"
import { randomUUID } from "node:crypto"

export default async function newProductService(productsData) {
  const id = randomUUID()
  const { img, name, price, stock } = productsData

  try {
    await sql`INSERT INTO product(id, name, img, price, stock) VALUES (${id}, ${name}, ${img}, ${price}, ${stock})`
    return {status: 201, message: "New product created!"}
  } catch (err) {
    if (err) throw { status: 400, message: "Error to create product" }
  }
}
