
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { products } from "../../ProductsMock";
import { database } from "../../firebaseconfig";
 import {getDocs,collection, query, where } from 'firebase/firestore'

import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [ items , setItems ] = useState([])

  const { categoryName } = useParams()
  
  

  useEffect( ()=>{

    let consulta ;
      const itemsCollection = collection( database , 'productos')

    if (categoryName){
       const q = query(itemsCollection, where('category',"==", categoryName))
      consulta = q
    } else {
    
    
      consulta= itemsCollection;
    }
    
    
   

     getDocs(consulta)
     .then((res)=>{
      const products = res.docs.map(product =>{
        return {
          ...product.data(), id:product.id
        }
      })
        setItems(products)
     })
     .catch((err)=> console.log(err))


      
  },[categoryName])


  return (
    <div>
      {
        items.length === 0 && <div>
            <h1>cargan2</h1>
        </div>
      }
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
