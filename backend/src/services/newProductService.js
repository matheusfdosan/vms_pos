import { sql } from "../configs/database.js"

export default async function newProductService(productsData) {
  const id = Math.floor(10000 + Math.random() * 90000)
  const { img, name, price, stock } = productsData

  try {
    await sql`INSERT INTO product(id, name, img, price, stock) VALUES (${id}, ${name}, ${img}, ${price}, ${stock})`
    return {status: 201, message: "New product created!"}
  } catch (err) {
    if (err) throw { status: 400, message: "Error to create product" }
  }
}
