import React, { useContext, useState } from 'react'
import FormCheckout from './FormCheckout'
import {addDoc,collection,serverTimestamp, updateDoc, doc} from "firebase/firestore"
import { database } from '../../firebaseconfig'
import {useFormik} from 'formik'
import * as Yup from "yup"
import { CartContext } from '../../context/CartContext'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const FormCheckoutContainer = () => {


    const [ OrderId,setOrderId] = useState(null)

 const {cart,totalCarrito,LimpiarCarrito}=useContext(CartContext)

  let total = totalCarrito()

  const checkoutFn = (data)=>{

    let orden = {
      buyer:data,
      items:cart,
      total:total,
      date:serverTimestamp()
    }
    const ordersCollection = collection(database,'orders')
    addDoc(ordersCollection,orden).then((res)=> setOrderId(res.id)).catch((err)=>console.log(err))

    cart.map( (product) => 
      updateDoc(doc(database,"productos", product.id),{
        stock : product.stock - product.quantity,
      })
    )
    LimpiarCarrito()
    
  }
const {handleSubmit, handleChange, errors}= useFormik({
  initialValues:{
    nombre: "",
    email: "",
    password:""
  },
  onSubmit:checkoutFn ,
  validationSchema: Yup.object().shape({
    nombre: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required("Este campo es obligatorio").matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
      message:
        'La constrasena debe contener 1 mayuscula, 1 minuscula, 1 caracter especial y 1 numero'
    })
  }),
  validateOnChange: false
})

  return (
    <div>
      {
        OrderId ? (
          <div>
            <h1>Gracias por su compra, el codigo de orden es {OrderId}</h1>
            <Link to={'/'}>
            <Button variant ='contained'>Volver a la pagina principal</Button>
            </Link>
          </div>
          
        ) : (
      
         <FormCheckout 
      errors = {errors} 
      handleChange={handleChange} 
      handleSubmit={handleSubmit} 
     />
    )}
  </div>
  );
}

export default FormCheckoutContainer