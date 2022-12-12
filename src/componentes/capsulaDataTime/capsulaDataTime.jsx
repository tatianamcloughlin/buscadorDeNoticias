import { selectClasses } from "@mui/material";
import { fechaActual, hora } from "../../libs/constantes";
import "./capsulaDataTime.css"

const CapsulaDataTime=()=>{
    return(
        <section 
        className="capsulaTime"
        >
        <div style={{fontSize:'69px'}} >
            {hora}
        </div>
        <div style={{fontSize:'smaller'}}>
            {fechaActual}
        </div>
        </section>
    )
}

export default CapsulaDataTime;