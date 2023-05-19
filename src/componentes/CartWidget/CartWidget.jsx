import { useContext } from "react"
import "./CartWidget.css"
import {BsFillCartFill} from "react-icons/bs"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import Cart from "../Carrt/Cart"


 export const CartWidget = () => {

    const {cart,cantidadTotal} = useContext(CartContext)


    let total = cantidadTotal()

    if (cart.length === 0 ){
        return <div>
            
        </div>
        
      }

    return <div> 
          <div className="Cart">
                <Link to={"/cart"} style={{color:"black"}}>
                <BsFillCartFill size={50}/><span style={{color:"blue", listStyle:"none"}}>{total}</span>
                
                </Link>
    </div>
 </div>
    
 }