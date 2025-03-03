import "./style.css"

//imagens
import marketIcon from "../../assets/market_icon.png"
import flipR_icon from "../../assets/flipR_icon.png"

//componentes
import Products from "../../components/Products"
function Dashboard() {
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
          <button className="left_btn">
            <strong>Compras</strong>
          </button>
          <button className="right_btn">
            <strong>Produtos</strong>
          </button>
        </div>
      </div>
        <Products />

      <a href="/" className="flipR_button">
        <img src={flipR_icon} alt="" />
      </a>
    </>
  )
}

export default Dashboard
