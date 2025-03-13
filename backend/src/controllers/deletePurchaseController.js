import deletePurchase from "../services/deletePurchase.js"

export default async (req, res) => {
    const {id} = req.body
    if(id){
        const data = await deletePurchase(id)
        return data
    } 
    else return {
        status: 400, message: "Id of purchase necessary!"
    }

}
