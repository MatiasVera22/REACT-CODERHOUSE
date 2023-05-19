import "./Navbar.css"
import { CartWidgetContainer } from "../CartWidget/CartWidgetContainer"
import {Outlet, Link} from 'react-router-dom'
import { database } from "../../firebaseconfig"
import  { getDocs, collection} from 'firebase/firestore'
import { useState, useEffect } from "react"
import { Button, colors } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const Navbar = ()=>{
    const navigate = useNavigate()
    const [ category , setCategory] = useState([])
    
    useEffect(()=>{
        const categoriesCollection = collection( database , 'categories')
        getDocs(categoriesCollection)
            .then((res)=>{ 
                let categoriesResult = res.docs.map(category => {
                return{
                    ...category.data(), id: category.id
                }
            })
            setCategory(categoriesResult)
        })
        
            .catch((err)=>console.log(err))


    },[])            

               
            
            

    return <div>
                <div className="cont" style={{borderTop:'20px solid'}} >
                    <Link to={"/"} style={{textDecoration:"none", color:"black"}}><div>
                        
                        <p>Logo</p>
                        
                        
                    </div>
                    </Link>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly", width:"60%", alignItems:"center"}}>
                        {
                     category.map(cat => {
                        return <Link key={cat.id} to={cat.path}><Button className="btn" style={{color:'black', }}>{cat.title}</Button></Link>
                     })
                   }
                    </div>
                   
                     <div className="carro">
                     <CartWidgetContainer />
                     </div>

                    
                        </div>
                        <div>
                    <Outlet/>
                </div>
            </div>
}