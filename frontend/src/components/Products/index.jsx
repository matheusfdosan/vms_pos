import "./style.css"
import { useState } from "react"
import newProductService from "../../utils/newProductService"

//imagens
import Plus_icon from "../../assets/Plus_icon.png"

//componentes
import Prod_card from "../../components/Prod_card"

function Products({ data }) {
  const [isaddModal, setaddModal] = useState(false)
  const [newProduct, setNewProduct] = useState({
    id: "00000",
    name: "Undefined",
    img: "https://cdn-icons-png.flaticon.com/512/446/446110.png",
    price: "00.00",
  })

  const handleChangeInput = (e) => {
    const { name, value } = e.target

    setNewProduct((prevProd) => ({
      ...prevProd,
      [name]: value,
    }))
  }

  const handleAddNewProduct = async () => {
    try {
      await newProductService(newProduct)
      document.location.reload()
      setaddModal(false)
    } catch (error) {
      console.log("error to add new product: " + error)
    }
  }

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
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleChangeInput}
            />

            <p>Código</p>
            <input
              type="text"
              name="id"
              value={newProduct.id}
              onChange={handleChangeInput}
            />

            <p>Imagem(URL)</p>
            <input
              type="text"
              name="img"
              value={newProduct.img}
              onChange={handleChangeInput}
            />

            <p>Preço</p>
            <input
              type="text"
              name="price"
              value={newProduct.price}
              onChange={handleChangeInput}
            />

            <button className="Add_btnf" onClick={handleAddNewProduct}>
              Adicionar
            </button>

            <button className="Add_btnf" onClick={() => setaddModal(false)}>
              Cancelar
            </button>
          </div>
        )}
      </div>
      <div className="container_products">
        {data.map((product, index) => {
          return <Prod_card key={index} product={product} />
        })}
      </div>
    </div>
  )
}

export default Products
