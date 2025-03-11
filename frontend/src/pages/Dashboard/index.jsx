import "./style.css"
import { useEffect, useState } from "react"
import getAllProduct from "../../utils/getAllProducts"

//imagens
import marketIcon from "../../assets/market_icon.png"
import flipR_icon from "../../assets/flipR_icon.png"

//componentes
import Products from "../../components/Products"
import Allpurchases from "../../components/Allpurchases"
import Loading from "../../components/Loading"

function Dashboard() {
  const [isProduct, setisProduct] = useState("Products")
  const [catalog, setCatalog] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchCatalog = async () => {
      setLoading(true)
      try {
        const allCatalog = await getAllProduct()
        setCatalog(allCatalog)
        setLoading(false)
      } catch (err) {
        console.log("Error to get catalog: " + err)
        setLoading(false)
      }
    }
    fetchCatalog()
  }, [])

  return (
    <>
      <header>
        <div className="header-container">
          <img src={marketIcon} alt="" />
          <h2>Caixa - 01</h2>
        </div>
      </header>
      <div className="dashboard-container">
        <div className="options">
          <button className="left_btn" onClick={() => setisProduct("Products")}>
            <strong>Produtos</strong>
          </button>
          <button
            className="right_btn"
            onClick={() => setisProduct("Purchases")}
          >
            <strong>Compras</strong>
          </button>
        </div>
      </div>

      {isProduct === "Products" ? (
        <Products data={catalog} />
      ) : (
        <Allpurchases />
      )}

      <a href="/" className="flipR_button">
        <img src={flipR_icon} alt="" />
      </a>

      {loading && <Loading />}
    </>
  )
}

export default Dashboard
