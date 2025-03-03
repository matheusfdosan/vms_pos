import Money_img from "../../assets/Money_img.png"
import Moneyp_img from "../../assets/Moneyp_img.png"
import "./style.css"

function Payment_Money({ paid }) {
  return (
    <div>
      {paid ? (
        <img src={Moneyp_img} alt="" className="Money_img2" id="img1" />
      ) : (
        <img src={Money_img} alt="" className="Money_img" id="img1" />
      )}
    </div>
  )
}

export default Payment_Money
