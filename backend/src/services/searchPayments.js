import { sql } from "../configs/database.js"


export default async function searchPurchase(){
    try{
        
        const data = await sql`SELECT * FROM purchase`
        return data
    }      
     catch (error) {
        console.error("Error to load purchases", error)
        return false
    }
}
