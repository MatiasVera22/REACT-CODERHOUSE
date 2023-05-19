import React, { useContext } from 'react'
import './Cart.css'
import { Button } from '@mui/material'
import { CartContext } from '../../context/CartContext'

const Cart = ({cart, limpiarcarrito, EliminarProducto, total,navigate}) => {


  return (
    <div className='cartCont'>
      
      <div className='cartRender'>
        <div>
          
        {
          cart.map(e => {
            return <div className='cartas' key={e.id} >
              <img className='img' src={e.img} alt="" />
              <h3>{e.price}</h3>
            <h4>Cantidad: {e.quantity}</h4>
            <Button className='btn' variant='contained' onClick={()=>{EliminarProducto(e.id)}}>Eliminar</Button>
            </div>
          })
        }
        </div>
     
      </div>
      <div className='cartDescription'>
        <h4>Resumen del carrito</h4>
          <div>
            <h5>Cantidad de productos:</h5>

          </div>
          <div>
          <h3>El total del carrito es: ${total}</h3>
      <Button variant='contained' onClick={limpiarcarrito}>Limpiar carrito</Button>
          </div>
          <div>
            <Button variant='contained' onClick={() => navigate('/checkout')}>Terminar la compra</Button>
          </div>
      </div>
    </div>

   
  )
}

export default Cart