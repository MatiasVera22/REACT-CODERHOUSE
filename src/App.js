import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import {Navbar} from "./componentes/Navbar/Navbar.jsx"
import { ItemListContainer } from "./componentes/ItemList/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetail/ItemDetailContainer";



function App() {


  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar/>}>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:name" element={<ItemListContainer/>}/>
            <Route path="/itemDetail/:id" element={<ItemDetailContainer/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;
