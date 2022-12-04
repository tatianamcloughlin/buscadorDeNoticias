import { NavLink } from "react-router-dom";
import './header.css';

const Header = ()=>{
    return(
        <nav className="nav-superior">
            <div className="div-logo">
                logo
            </div>
            <div className="div-inicio">
                <NavLink to='/'> INICIO </NavLink>
            </div>
        </nav>
    )
}

export default Header;