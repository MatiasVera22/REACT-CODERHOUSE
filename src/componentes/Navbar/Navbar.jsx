import "./Navbar.css"
import {Cartwidget} from "../CartWidget/CartWidget"

export const Navbar = ()=>{
    
    return <div className="cont">
        <div>
            <img className="imgLogo" src="https://cdn-icons-png.flaticon.com/512/263/263075.png" alt="" />
        </div>
        <ul className="ola">
            <li><button><a href=""> Productos</a></button></li>
            <li><button><a href=""> Contacto</a></button></li>
            <li><button><a href=""> Envios</a></button></li>
        </ul>
        <div className="cartDiv">
        <Cartwidget />
        </div>
    </div>
}