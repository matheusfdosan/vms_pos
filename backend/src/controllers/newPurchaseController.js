import searchPrice from "../services/searchPrice.js"
import savePurchase from "../services/SavePurchase.js"
import { uuid } from "uuidv4"
export default async (req, res) => {
    const {cpf, orders} = req.body
    let total=0
    if(cpf && orders) if(orders.length>0){

        for(const element of orders){
            var price = await searchPrice(element)
            console.log(price)
            total+=price
        }
        
        const orderStringFy = JSON.stringify(orders)
        console.log("total",total)
        const status = await savePurchase(cpf, uuid(), total, orderStringFy)
        if(status) return {
            status: 200,
            message: "Purchase create succesfully"
          }
        else return {
            status: 400,
            message: "Error to create purchase"
        }
    }
}
