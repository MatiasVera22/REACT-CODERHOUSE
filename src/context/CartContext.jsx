import { createContext } from "react"
import { Outlet } from "react-router-dom"
import { useState } from "react"

export const CartContext = createContext()


const CartContextProvider = ({children}) => {

        const [cart, setCart] = useState([])

        const agregarAlCarrito= (producto)=>{
            let existe = estaEnCarrito(producto.id)
            if(existe){
                   let newCart = cart.map((elemento)=>{
                    if(elemento.id === producto.id){
                        return{...elemento, quantity:elemento.quantity + producto.quantity}
                    }else{
                        return elemento
                    }
                   })

                   setCart(newCart)
                   
                                    
                   
            }else{
                setCart([...cart,producto])
            }
            
        }


        const totalCarrito = ()=>{
            let total = cart.reduce((acc,elemento)=>{
                return acc + (elemento.price * elemento.quantity)
            },0)
                return total
        }

        const estaEnCarrito = (id)=>{
            let existe = cart.some(e => e.id === id)
                return existe
        }


        const LimpiarCarrito = ()=>{
            setCart([])
        }
        const EliminarProducto = (id)=>{
                const productosFiltrados = cart.filter((elemento)=> elemento.id !== id)
                setCart(productosFiltrados)
        }
        const cantidadTotal=()=>{
            let total = cart.reduce((acc,elemento)=>{
                return acc + elemento.quantity
            },0)

            return total
        }

        const getQuantityById = (id)=>{
            let product = cart.find(elemento => elemento.id === id)
            return product?.quantity
        }



        let data = {cart,agregarAlCarrito,LimpiarCarrito, EliminarProducto,totalCarrito,cantidadTotal,getQuantityById}
  return <CartContext.Provider value={data}>
                {children}
            </CartContext.Provider> 
    
    
}

export default CartContextProvider