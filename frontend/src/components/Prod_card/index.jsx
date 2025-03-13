import "./style.css"
import Edit_icon from "../../assets/Edit_icon.png"
import Delete_icon from "../../assets/Delete_icon.png"
import { useState } from "react"
import BrazilReal from "../../utils/monetaryFormat"
import updateProduct from "../../utils/updateProduct"
import Loading from "../../components/Loading"
import ConfirmModal from "../../components/ConfirmModal"

function Prod_card({ product }) {
  const [isModal, setisModal] = useState(false)
  const [msg, setMsg] = useState("")
  const [prod, setProd] = useState({
    id: product.id,
    img: product.img,
    name: product.name,
    price: product.price,
    oldCode: product.id,
  })
  const [loading, setLoading] = useState(false)
  const [confirmModal, setConfirmModal] = useState(false)

  const handleUpdateProduct = async () => {
    setLoading(true)
    if (
      prod.id.length === 0 ||
      prod.id.length < 5 ||
      prod.name.length === 0 ||
      prod.img.length === 0 ||
      prod.price.length === 0
    ) {
      setMsg("Preencha todos os campos!")
      setLoading(false)
    } else {
      try {
        await updateProduct(prod)
        setisModal(false)
        document.location.reload()
        setLoading(false)
      } catch (err) {
        console.log("error to update product" + err)
        setLoading(false)
      }
    }
  }

  const handleDeleteProduct = async () => {
    setConfirmModal(true)
  }

  const settedOptions = (opt) => {
    setConfirmModal(opt)
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

          <p>Código</p>
          <input
            type="text"
            name="id"
            value={prod.id}
            placeholder="12345"
            onChange={({ target }) => {
              if (/^\d{0,5}$/.test(target.value))
                setProd((prevProducts) => ({
                  ...prevProducts,
                  id: target.value,
                }))
            }}
            autoComplete="off"
          />

          <p>Nome</p>
          <input
            type="text"
            name="name"
            value={prod.name}
            onChange={({ target }) => {
              setProd((prevProducts) => ({
                ...prevProducts,
                name: target.value,
              }))
            }}
            placeholder="Leite Moça"
            autoComplete="off"
          />

          <p>Imagem</p>
          <input
            type="text"
            name="img"
            value={prod.img}
            onChange={({ target }) => {
              setProd((prevProducts) => ({
                ...prevProducts,
                img: target.value,
              }))
            }}
            autoComplete="off"
          />

          <p>Preço</p>
          <input
            type="text"
            name="price"
            value={prod.price}
            placeholder="9.99"
            onChange={({ target }) => {
              if (/^\d*(\.\d{0,2})?$/.test(target.value))
                setProd((prevProducts) => ({
                  ...prevProducts,
                  price: target.value,
                }))
            }}
            autoComplete="off"
          />

          <span id="msg">{msg}</span>

          <button className="Btn_form" onClick={handleUpdateProduct}>
            Atualizar
          </button>

          <button className="Btn_form" onClick={() => setisModal(false)}>
            Cancelar
          </button>
        </div>
      )}

      {loading && <Loading />}
      {confirmModal && (
        <ConfirmModal
          message="Deseja mesmo deletar esse produto?"
          option={settedOptions}
          id={prod.id}
        />
      )}
    </div>
  )
}

export default Prod_card
