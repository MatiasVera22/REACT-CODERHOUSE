import "./Navbar.css"
import { CartWidgetContainer } from "../CartWidget/CartWidgetContainer"
import {Outlet, Link} from 'react-router-dom'


export const Navbar = ()=>{

    
    return <div>
                <div className="cont">
                    <Link to="/">
                    <img  className="imgLogo" src="https://cdn-icons-png.flaticon.com/512/263/263075.png" alt="" />
                    </Link>
                     <ul className="ola">
                        <Link to={"/"}><li><button>Todas</button></li></Link>
                        <Link to={"/category/urbanas"}><li><button>Urbanas</button></li></Link>
                        <Link to={"/category/deportivas"}><li><button>Deportivas</button></li></Link>
                     </ul>

                    <CartWidgetContainer />
                </div>
                <div>
            <Outlet/>
        </div>
    </div>
}