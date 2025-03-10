import React, { useState } from "react"
import BrazilReal from "../../utils/monetaryFormat"
import "./styles.css"
import Plus_icon from "../../assets/Plus_icon.png"
import Minus_icon from "../../assets/Minus_icon.png"

function One_card({ noAmountOn, data }) {
  const [amount, setAmount] = useState(1)

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
          <img src={data.img} alt="" className="Pr_icon" />
          <div className="Pr_info">
            <span className="Pr_name">{data.name}</span>
            <span className="Pr_sub">Código: {data.id}</span>
            <span className="Pr_sub">{BrazilReal.format(data.price)}</span>
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
            <span>{BrazilReal.format(data.price * amount)}</span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default One_card
