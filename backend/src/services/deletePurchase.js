import { sql } from "../configs/database.js"

export default async function deletePurchase(id){
    try {
        await sql`DELETE FROM purchase WHERE id = ${id}`
        return {
          status: 200,
          message: "Client successfully deleted!",
        }
      } catch (err) {
        if (err) throw { status: 400, message: "Error to delete client!" + err }
      }
}