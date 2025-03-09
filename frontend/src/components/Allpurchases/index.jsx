import './style.css'
import search_icon from '../../assets/icon-search.png'

import Purchase from '../../components/Purchase'

function Allpurchases () {
    return (
        <div className='Pcontainer'>
           <h2>Todas as Compras</h2>
           <input type="text" className='Search_input' placeholder='Carl Barang'/>
           <span className='search_icon'><img src={search_icon} alt="" /></span>
           <div className='Plist'>
           <Purchase />
           <Purchase />
           <Purchase />
           </div>

        </div>
    )
}


export default Allpurchases