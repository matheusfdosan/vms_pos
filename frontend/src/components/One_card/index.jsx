import React, { useState } from "react"
import "./styles.css"
import milk_img from "../../assets/milk_img.png"
import Plus_icon from "../../assets/Plus_icon.png"
import Minus_icon from "../../assets/Minus_icon.png"

function One_card({ noAmountOn }) {
  const [amount, setAmount] = useState(0)

  const handleMoreProducts = () => {
    setAmount(amount + 1)
  }

  const handleLessProducts = () => {
    if (amount !== 0) {
      setAmount(amount - 1)
    }
  }

  return (
    <div className="Card">
      <div className="card-container">
        <div className="Pr_icon_info">
          <img src={milk_img} alt="" className="Pr_icon" />
          <div className="Pr_info">
            <span className="Pr_name">Leite Jussara</span>
            <span className="Pr_sub">Código: 02394</span>
            <span className="Pr_sub">R$ 4,50</span>
          </div>
        </div>

        {noAmountOn ? (
          <div className="Pr_amount">
            <div className="buttons">
              <button className="buttonP" onClick={handleMoreProducts}>
                <img src={Plus_icon} alt="" />
              </button>
              <span>{amount}</span>
              <button className="buttonP" onClick={handleLessProducts}>
                <img src={Minus_icon} alt="" />
              </button>
            </div>
            <span>
              <strong>R$4,50</strong>
            </span>
          </div>
        ) : ""}
      </div>
    </div>
  )
}

export default One_card
