import Pix_img from "../../assets/Pix_img.png"
import Pixp_img from "../../assets/Pixp_img.png"
import "./style.css"

function Payment_Pix({ paid }) {
  return (
    <div>
      {paid ? (
        <img src={Pixp_img} alt="" className="Pix_img" id="img1" />
      ) : (
        <img src={Pix_img } alt="" className="Pix_img" id="img1" />
      )}
    </div>
  )
}

export default Payment_Pix
