import Debit_p from "../../assets/Debit_p.png"
import Credit from "../../assets/Credit_img.png"
import payment_card from "../../assets/paid_with_card.svg"

function Payment_Credit({ paid }) {
  return (
    <div className="imgs">
      {paid ? (
        <img src={Debit_p} alt="" className="img1" id="img1" style={{width: "fit-content"}} />
      ) : (
        <img src={payment_card} alt="" className="img1" id="img1" />
      )}

      {!paid && <img src={Credit} alt="card" className="img2" />}
    </div>
  )
}

export default Payment_Credit
