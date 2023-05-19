import React from 'react'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import { Button } from '@mui/material'
import CounterContainer from '../Counter/CounterContainer'

const ItemDetail = ({product, onAdd, cantidadTotal}) => {
  return (
    <div>
    <div className='itemcont'>
      <div className='dvitext'>
      <img src={product.img} alt="" />
        <h2>{product.title}</h2>
        <h2>{product.description}</h2>  
                  <div>
           <Link to="/" ><Button style={{backgroundColor:"blue" ,color:"white"}}>Regresar</Button></Link>
         </div>
         </div> 

    </div>  
    {
      product.stock > 0 ? 
        <div style={{display:"flex",width:"100%",justifyContent:"center"}}><CounterContainer stock={product.stock} onAdd={onAdd} initial = {cantidadTotal}/></div>
        : <div style={{display:"flex",width:"100%",justifyContent:"center"}} ><h2>No hay stock</h2></div>
      
    }
</div>
  )}
export default ItemDetail