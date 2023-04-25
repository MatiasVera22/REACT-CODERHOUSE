import { products } from "../../productsMock"
import ItemList from "./ItemList"
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"


export const ItemListContainer = () => {

    const [ items, setItems]= useState([])

    const {name} = useParams()
    console.log(name)

        useEffect(()=>{

            const productsFiltered = products.filter(prod => prod.category === name)

            const task = new Promise ((resolve, reject)=>{
                resolve( name ? productsFiltered : products)
            });
            task
                .then((res)=> setItems(res))
                .catch((error) => console.log(error))
        }, [name])

            
    return <div>
        <ItemList items = {items} />
    </div>
}

