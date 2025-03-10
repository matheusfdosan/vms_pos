import React, { useEffect, useState } from "react"
import One_card from "../One_card"
import BrazilReal from "../../utils/monetaryFormat"
import "./style.css"

function P_card({ cardsHeight, noAmount, productsInfo }) {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(0)
    if (productsInfo.length === 0) {
      setTotal(0)
    } else {
      productsInfo.map((info) => {
        setTotal((prev) => prev + Number(info.price))
      })
    }
  }, [productsInfo])

  return (
    <div className="container" style={{ height: cardsHeight }}>
      <div className="headerList">
        {" "}
        <p>Detalhes da Compra</p> <span>{BrazilReal.format(total)}</span>{" "}
      </div>
      <div id="cards">
        {productsInfo &&
          productsInfo.map((info, index) => {
            return <One_card key={index} data={info} noAmountOn={noAmount} />
          })}
      </div>
    </div>
  )
}

export default P_card
