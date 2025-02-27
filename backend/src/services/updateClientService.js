import { sql } from "../configs/database.js"

export default async function updateClientService(clientCPF, updatedInfo) {
  const {name, email} = updatedInfo

  try {
    await sql`UPDATE client SET name = ${name}, email = ${email} WHERE cpf = ${clientCPF}`

    return {
      status: 200,
      message: "Client successfully updated!",
    }
  } catch (err) {
    if (err) throw { status: 400, message: "Error to update client!" + err }
  }
}
