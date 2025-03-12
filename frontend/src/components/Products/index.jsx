import "./style.css"
import { useState } from "react"
import newProductService from "../../utils/newProductService"

//imagens
import Plus_icon from "../../assets/Plus_icon.png"

//componentes
import Prod_card from "../../components/Prod_card"
import Loading from "../../components/Loading"

function Products({ data }) {
  const [isaddModal, setaddModal] = useState(false)
  const [newProduct, setNewProduct] = useState({
    id: "00000",
    name: "Não definido",
    img: "https://cdn-icons-png.flaticon.com/512/446/446110.png",
    price: "00.00",
  })
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState("")

  const handleAddNewProduct = async () => {
    setLoading(true)
    if (
      newProduct.id.length === 0 ||
      newProduct.id.length < 5 ||
      newProduct.name.length === 0 ||
      newProduct.img.length === 0 ||
      newProduct.price.length === 0
    ) {
      setMsg("Preencha todos os campos!")
      setLoading(false)
      return
    } else {
      try {
        await newProductService(newProduct)
        document.location.reload()
        setaddModal(false)
        setLoading(false)
      } catch (error) {
        console.log("error to add new product: " + error)
        setLoading(false)
      }
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
              onChange={({ target }) => {
                setNewProduct((prevProducts) => ({
                  ...prevProducts,
                  name: target.value,
                }))
              }}
            />

            <p>Código</p>
            <input
              type="text"
              name="id"
              value={newProduct.id}
              onChange={({ target }) => {
                if (/^\d{0,5}$/.test(target.value))
                  setNewProduct((prevProducts) => ({
                    ...prevProducts,
                    id: target.value,
                  }))
              }}
            />

            <p>Imagem(URL)</p>
            <input
              type="text"
              name="img"
              value={newProduct.img}
              onChange={({ target }) => {
                setNewProduct((prevProducts) => ({
                  ...prevProducts,
                  img: target.value,
                }))
              }}
            />

            <p>Preço</p>
            <input
              type="text"
              name="price"
              value={newProduct.price}
              onChange={({ target }) => {
                if (/^\d*(\.\d{0,2})?$/.test(target.value))
                  setNewProduct((prevProducts) => ({
                    ...prevProducts,
                    price: target.value,
                  }))
              }}
              placeholder="ex: 12.34"
            />

            <span id="msg">{msg}</span>

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
      {loading && <Loading />}
    </div>
  )
}

export default Products
