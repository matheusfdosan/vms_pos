import "./style.css"

//imagens
import Plus_icon from "../../assets/Plus_icon.png"

//componentes
import Prod_card from "../../components/Prod_card"

function Products() {
  return (
    <div className="products-container">
      <div className="all-products-container">
        <h2>Todos os Produtos</h2>
        <button className="Addp">
          <img src={Plus_icon} alt="" />
        </button>
      </div>
      <Prod_card />
    </div>
  )
}

export default Products
