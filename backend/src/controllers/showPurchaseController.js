import searchPurchase from "../services/searchPayments.js"

export default async (req, res)=>{
    const purchases = await searchPurchase()
    var nElements=[]
    
    try {
        purchases.forEach(element=>{

            const itemsJson = JSON.parse(element.items)
            delete element.items
            element.items=itemsJson
            nElements.push(element)
        })
        console.log(nElements)

        return{
            status:200,
            message:"All purchases have been searched successfully!",
            body:nElements
        }
        
    } catch (error) {
        console.error("Error to search purchases: ",error)
    }
        
}