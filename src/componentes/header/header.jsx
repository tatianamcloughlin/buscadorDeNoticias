import { NavLink } from "react-router-dom";
import './header.css';
import logo from '../assets/img/logo2.png';
import ScreenSearchDesktopRoundedIcon from '@mui/icons-material/ScreenSearchDesktopRounded';
import { fontSize } from "@mui/system";


const Header = ()=>{
    return(
        <nav className="nav-superior">
            <div className="div-logo">
                <img src={logo} alt="" width={'170px'} />

            </div>
            <div className="div-inicio">
                <NavLink to='/buscador'>
                <ScreenSearchDesktopRoundedIcon 
                sx={{ 
                color: 'aliceblue',
                fontSize:40,
                }}/>
                </NavLink>
            </div>
        </nav>
    )
}

export default Header;