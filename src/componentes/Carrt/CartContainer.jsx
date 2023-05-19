import React, { useContext } from 'react'
import Cart from './Cart'
import { CartContext } from '../../context/CartContext'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

const CartContainer = () => {
  const {cart , LimpiarCarrito,EliminarProducto,totalCarrito} = useContext(CartContext)
    let total = totalCarrito()
    const navigate = useNavigate()

    if (cart.length === 0 ){
      return <div style={{display:'flex', flexDirection:'column',justifyContent:'center'}}>
          <h1 style={{textAlign: "center", display:'block'}}>Aun no hay productos en el carrito</h1>
          <div style={{display:'flex', flexDirection:'row',justifyContent:'center'}}>
          <Link to={"/"}>
            <Button type='contained' style={{backgroundColor:"blue", color:"white"}}>Agregar productos :D</Button>
          </Link>
          </div>
      </div>
      
    }
  return (
    <div>
        <Cart navigate={navigate} total={total} cart={cart} limpiarcarrito ={LimpiarCarrito} EliminarProducto={EliminarProducto}/>
    </div>
  )
}

export default CartContainer