import {sql} from "../configs/database.js"

export default async function showAllClientsService() {
  try {
    const allClients = await sql`SELECT * FROM client`
    return {
      status: 200,
      message: "All clients successfully obtained!",
      body: allClients,
    }
  } catch (err) {
    
  }
}