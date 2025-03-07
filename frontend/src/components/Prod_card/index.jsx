import './style.css'
import milk_img from "../../assets/milk_img.png"
import Edit_icon from "../../assets/Edit_icon.png"
import Delete_icon from "../../assets/Delete_icon.png"

import Form from "../../components/Form"

import { useState } from 'react'

function Prod_card () {

  const [isModal, setisModal] = useState(false)
 
    return (
       <div className='product-card'>
         <div className='Pinfo'>
         <img  src={milk_img} alt="" className = 'P_img' />
        <div className='info'>
         <span className='sub_1'><strong>Leite Jussara</strong></span>
         <span>Código:02394</span>
         <span>R$4,50</span>
         </div>
         </div>
         <div className='btns'>
         <button className='Edit_btn'><img src={Edit_icon} alt="" onClick={() => setisModal(true)} /></button>
         <button className='Delete_btn'><img src={Delete_icon} alt="" /></button>
         </div>
         {isModal && (
          <div className='Edit_form'>
             <h2 className='title'>Editar Produto:</h2>

             <p>Nome</p>
             <input type="text" name="" id="" />

             <p>Preço</p>
             <input type="text" />

             <p>Código</p>
             <input type="text" name="" id="" />

             <button className='Btn_form' onClick={() => setisModal(false)}>Atualizar</button>
          </div>
         )}
       </div>
       
    )
}

export default Prod_card