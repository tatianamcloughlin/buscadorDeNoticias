import { selectClasses } from "@mui/material";
import { fechaActual, hora } from "../../libs/constantes";
import "./capsulaDataTime.css"

export const CapsulaDataTime=()=>{
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

export const DataTime=()=>{
    return(
        <section className="dataTime">
        <div style={{fontSize:'30px'}} >
            {hora}
        </div>
        <div style={{fontSize:'smaller'}}>
            {fechaActual}
        </div>
        </section>
    )

}

