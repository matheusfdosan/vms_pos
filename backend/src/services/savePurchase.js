import { sql } from "../configs/database.js"


export default async function savePurchase(cpf, id, price, items){
    try{
        console.log("id "+id)
        const data = await sql`INSERT INTO purchase  (items, total, client_CPF) VALUES ( ${items}::jsonb, ${price}, ${cpf})`
        return true
    }      
     catch (error) {
        console.error("Error to save purchase", error)
        return false
    }
}
