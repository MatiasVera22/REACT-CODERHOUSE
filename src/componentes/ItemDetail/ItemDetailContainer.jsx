import React from 'react'
import ItemDetail from './ItemDetail'
import { products } from '../../productsMock'
import {useEffect,useState} from 'react'
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {

    const[ product, setProduct] = useState({})

    const {id} = useParams()
    console.log(id)

    useEffect(()=>{
        let encontrarId = products.find(prod => prod.id === +id) 
        setProduct(encontrarId)
    },[id])



  return (
    <div>
        <ItemDetail product = {product}/>
    </div>
  )
}

export default ItemDetailContainer