import { sql } from "../configs/database.js"

export default async function newClientService(userData) {
  const { name, email, cpf } = userData

  try {
    await sql`INSERT INTO client (name, email, cpf) VALUES (${name}, ${email}, ${cpf})`
    return { status: 201, message: "Client created successfully!" }
  } catch (err) {
    if (err) throw { status: 400, message: "Error to create client!" + err }
  }
}
