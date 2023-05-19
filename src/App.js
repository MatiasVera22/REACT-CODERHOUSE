import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import {Navbar} from "./componentes/Navbar/Navbar.jsx"
import ItemListContainer  from "./componentes/ItemList/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetail/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import CartContainer from "./componentes/Carrt/CartContainer";
import Form from "./componentes/Form/Form";
import CounterContainer from "./componentes/Counter/CounterContainer";
import NavbarContainer from "./componentes/Navbar/NavbarContainer";
import FormCheckoutContainer from "./componentes/FormCheckout/FormCheckoutContainer";




function App() {


  return(
    <BrowserRouter>
      <CartContextProvider>
      <Routes>
        <Route element={<NavbarContainer/>}>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryName" element={<ItemListContainer/>}/>
            <Route path="/itemDetail/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element ={<CartContainer/>}/>
            <Route path="/form" element={<Form/>} />
            <Route path="/checkout" element={<FormCheckoutContainer/>} />
            <Route path="/counter" element={<CounterContainer/>}/>
        </Route>
      </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
  
}

export default App;
