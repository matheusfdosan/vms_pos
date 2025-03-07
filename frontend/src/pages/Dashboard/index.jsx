import "./style.css"
import {useState} from "react"

//imagens
import marketIcon from "../../assets/market_icon.png"
import flipR_icon from "../../assets/flipR_icon.png"

//componentes
import Products from "../../components/Products"
import Allpurchases from "../../components/Allpurchases"
function Dashboard() {
  

  const [isProduct, setisProduct] = useState("Products")
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
          <button className="left_btn" onClick={() => setisProduct("Products")} >
            <strong>Produtos</strong>
          </button>
          <button className="right_btn" onClick={() => setisProduct("Purchases")}>
            <strong>Compras</strong>
          </button>
        </div>
      </div>

      {isProduct === "Products" ? (
       <Products />
      ): (<Allpurchases />)}
       

      <a href="/" className="flipR_button">
        <img src={flipR_icon} alt="" />
      </a>
    </>
  )
}

export default Dashboard
