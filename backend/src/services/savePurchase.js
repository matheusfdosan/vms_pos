import { sql } from "../configs/database.js"


export default async function savePurchase(cpf, price, items){
    try{
        await sql`INSERT INTO purchase  (items, total, client_CPF) VALUES ( ${items}::jsonb, ${price}, ${cpf})`
        return true
    }      
     catch (error) {
        console.error("Error to save purchase", error)
        return false
    }
}
