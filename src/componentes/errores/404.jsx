import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import './404.css'
import { color } from "@mui/system";


const Error404 = () => {
    return (
    <div  className="div-404"> 
        <h1 style={{marginBottom:'3px', color:'#425c82'}}>Parece que esta pagina no existe.</h1>
        <h4>¿Quieres intentar otra busqueda?</h4>
        <NavLink to='/'><SearchIcon sx={{fontSize:' xxx-large'}}/></NavLink>

    </div>)
}
export default Error404;