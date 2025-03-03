import './style.css'
import milk_img from "../../assets/milk_img.png"

function Prod_card () {
    return (
       <div className='product-card'>
         <img src={milk_img} alt="" />
       </div>
    )
}

export default Prod_card