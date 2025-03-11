import { sql } from "../configs/database.js"


export default async function searchPrice(id){
    try{
        const price = await sql`SELECT price FROM product WHERE id=${id}`
        return Number(price[0].price)
    }catch(error){
        console.error("Erro to search price: ",error)
    }
}