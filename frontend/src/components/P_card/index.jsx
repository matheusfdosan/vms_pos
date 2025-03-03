import One_card from "../One_card"
import "./style.css"

function P_card({ cardsHeight, noAmount }) {
  return (
    <div className="container" style={{ height: cardsHeight }}>
      <div className="headerList">
        {" "}
        <p>Detalhes da Compra</p> <span>R$4,50</span>{" "}
      </div>
      <div id="cards">
        <One_card noAmountOn={noAmount} />
      </div>
    </div>
  )
}

export default P_card
