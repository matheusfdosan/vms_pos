import "./style.css"
import { useState } from "react"


//imagens
import Plus_icon from "../../assets/Plus_icon.png"

//componentes
import Prod_card from "../../components/Prod_card"


function Products() {
  
const [isaddModal, setaddModal] = useState(false)
  
  return (
    <div className="products-container">
      <div className="all-products-container">
        <h2>Todos os Produtos</h2>
        <button className="Addp" onClick={() => setaddModal(true)}>
          <img src={Plus_icon} alt="" />
        </button>
        {isaddModal && (
          <div className="Add_form">
            <h2 className="title_add">Adicione um produto</h2>

            <p>Nome</p>
            <input type="text" />

            <p>Código</p>
            <input type="text" />

            <p>Imagem(URL)</p>
            <input type="text" />

            <p>Preço</p>
            <input type="text" />

            <p>Estoque</p>
            <input type="text" />

            <button className="Add_btnf" onClick={ ()=> setaddModal(false) }>Adicionar</button>

          </div>
        )}
      </div>
      <Prod_card />
    </div>
  )
}

export default Products
