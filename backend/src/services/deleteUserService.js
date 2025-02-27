import { sql } from "../configs/database.js"

export default async function deleteUserService(clientCPF) {
  try {
    await sql`DELETE FROM client WHERE cpf = ${clientCPF}`
    return {
      status: 200,
      message: "Client successfully deleted!",
    }
  } catch (err) {
    if (err) throw { status: 400, message: "Error to delete client!" + err }
  }
}
