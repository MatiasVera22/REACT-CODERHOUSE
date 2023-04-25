import React from 'react'


const ItemDetail = ({product}) => {
  return (
    <div style={{display:"flex", flexDirection:"row", width: "100%", height:"100%",justifyContent:"center"}}>
      <div style={{width:"600px", display:'flex',flexDirection:"column",alignItems:"center"}}>
        <img style={{ height:"auto" , width:"40%"}} src={product.img} alt="imagen/producto" />
        <h3>{product.title}</h3>
        <h3>{product.description}</h3>
        <h3>{product.price}</h3>
      </div>
    </div>
  )
}

export default ItemDetail