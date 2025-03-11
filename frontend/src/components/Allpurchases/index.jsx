import "./style.css"
import getAllPurchases from "../../utils/getAllPurchases"
import Purchase from "../../components/Purchase"
import { useEffect, useState } from "react"
import Loading from "../../components/Loading"

function Allpurchases() {
  const [purchases, setPurchases] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchPurchases = async () => {
      try {
        const allPurchases = await getAllPurchases()
        setPurchases(allPurchases)
        setLoading(false)
      } catch (err) {
        console.log("Error to get purchases: " + err)
        setLoading(false)
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

      {loading && <Loading />}
    </div>
  )
}

export default Allpurchases
