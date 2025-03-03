import "./style.css"
import Creditp from "../../assets/Creditp_img.png"
import Card from "../../assets/Card.png"
import payment_card from "../../assets/paid_with_card.svg"

function Payment_imgs({ paid }) {
  return (
    <div className="imgs">
      {paid ? (
        <img src={Creditp} alt="" className="img1" id="img1" style={{width: "fit-content"}} />
      ) : (
        <img src={payment_card} alt="" className="img1" id="img1" />
      )}

      {!paid && <img src={Card} alt="card" className="img2" />}
    </div>
  )
}

export default Payment_imgs
