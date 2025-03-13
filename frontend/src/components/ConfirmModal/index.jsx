import deleteProduct from "../../utils/deleteProduct"
import "./styles.css"

function ConfirmModal({ message, option, id }) {
  const handleClickYes = async () => {
    try {
      await deleteProduct(id)
      document.location.reload()
      option(false)
  } catch (error) {
      console.error("Error to delete a product" + err)
    }
  }

  const handleClickNo = () => {
    option(false)
  }

  return (
    <div className="confirm-modal">
      <h2>{message}</h2>

      <div className="options-btns">
        <button onClick={handleClickYes}>Continuar</button>
        <button onClick={handleClickNo}>Cancelar</button>
      </div>
    </div>
  )
}

export default ConfirmModal
