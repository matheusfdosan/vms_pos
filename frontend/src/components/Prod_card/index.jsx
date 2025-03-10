import "./style.css"
import Edit_icon from "../../assets/Edit_icon.png"
import Delete_icon from "../../assets/Delete_icon.png"
import deleteProduct from "../../utils/deleteProduct"
import { useState } from "react"
import BrazilReal from "../../utils/monetaryFormat"
import updateProduct from "../../utils/updateProduct"

function Prod_card({ product }) {
  const [isModal, setisModal] = useState(false)

  const [prod, setProd] = useState({
    id: product.id,
    img: product.img,
    name: product.name,
    price: product.price,
    oldCode: product.id,
  })

  const handleUpdateProduct = async () => {
    try {
      await updateProduct(prod)
      setisModal(false)
      document.location.reload()
    } catch (err) {
      console.log("error to update product" + err)
    }
  }

  const handleChangeInput = (e) => {
    const { name, value } = e.target

    setProd((prevProd) => ({
      ...prevProd,
      [name]: value,
    }))
  }

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(prod.id)
      document.location.reload()
    } catch (error) {
      console.error("Error to delete a product" + err)
    }
  }

  return (
    <div className="product-card">
      <div className="Pinfo">
        <img src={product.img} alt={product.name} className="P_img" />

        <div className="info">
          <span className="sub_1">
            <strong>{product.name}</strong>
          </span>

          <span>Código: {product.id}</span>

          <span>{BrazilReal.format(product.price)}</span>
        </div>
      </div>

      <div className="btns">
        <button className="Edit_btn" onClick={() => setisModal(true)}>
          <img src={Edit_icon} alt="edit" />
        </button>

        <button className="Delete_btn" onClick={handleDeleteProduct}>
          <img src={Delete_icon} alt="delete" />
        </button>
      </div>

      {isModal && (
        <div className="Edit_form">
          <h2 className="title">Editar Produto:</h2>

          <p>Nome</p>
          <input
            type="text"
            name="name"
            value={prod.name}
            onChange={handleChangeInput}
            placeholder="Leite Moça"
            autoComplete="off"
          />

          <p>Preço</p>
          <input
            type="text"
            name="price"
            value={prod.price}
            placeholder="9.99"
            onChange={handleChangeInput}
            autoComplete="off"
          />

          <p>Imagem</p>
          <input
            type="text"
            name="img"
            value={prod.img}
            onChange={handleChangeInput}
            autoComplete="off"
          />

          <p>Código</p>
          <input
            type="text"
            name="id"
            value={prod.id}
            placeholder="12345"
            onChange={handleChangeInput}
            autoComplete="off"
          />

          <button className="Btn_form" onClick={handleUpdateProduct}>
            Atualizar
          </button>

          <button className="Btn_form" onClick={() => setisModal(false)}>
            Cancelar
          </button>
        </div>
      )}
    </div>
  )
}

export default Prod_card
