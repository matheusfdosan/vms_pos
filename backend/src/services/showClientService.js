import { sql } from "../configs/database.js"

export default async function showClientService(clientCPF) {
  try {
    const clientInfo = await sql`SELECT * FROM client WHERE cpf = ${clientCPF}`
    return {
      status: 200,
      message: "Client successfully obtained!",
      body: clientInfo,
    }
  } catch (err) {
    if (err) throw { status: 400, message: "Error to create client!" + err }
  }
}
