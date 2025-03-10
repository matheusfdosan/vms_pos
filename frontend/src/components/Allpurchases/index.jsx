import "./style.css"
import getAllPurchases from "../../utils/getAllPurchases"
import Purchase from "../../components/Purchase"
import { useEffect, useState } from "react"

function Allpurchases() {
  const [purchases, setPurchases] = useState([])

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const allPurchases = await getAllPurchases()
        setPurchases(allPurchases)
      } catch (err) {
        console.log("Error to get purchases: " + err)
      }
    }
    fetchPurchases()
  }, [])

  return (
    <div className="Pcontainer">
      <h2>Todas as Compras</h2>
      <div className="Plist">
        {purchases.map((purchase, index) => {
          return <Purchase key={index} data={purchase} />
        })}
      </div>
    </div>
  )
}

export default Allpurchases
