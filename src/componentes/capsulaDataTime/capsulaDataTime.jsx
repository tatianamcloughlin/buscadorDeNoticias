import { selectClasses } from "@mui/material";
import { fechaActual, hora } from "../../libs/constantes";

const CapsulaDataTime=()=>{
    return(
        <section>
        <div>
            {hora}
        </div>
        <div>
            {fechaActual}
        </div>
        </section>
    )
}

export default CapsulaDataTime;