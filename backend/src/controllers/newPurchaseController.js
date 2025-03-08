import searchPrice from "../services/searchPrice.js"
import savePurchase from "../services/SavePurchase.js"
export default async (req, res) => {
    const {cpf, orders} = req.body
    let total=0
    if(cpf && orders) if(orders.length>0){

        for(const element of orders){
            const {item, amount} = element
            var price = await searchPrice(item)
            console.log(price, " x ", amount, " = ", price*amount)
            total+=(price*amount)
        }
        
        const orderStringFy = JSON.stringify(orders)
        console.log("total",total.toFixed(2))
        const status = await savePurchase(cpf, total.toFixed(2), orderStringFy)
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
