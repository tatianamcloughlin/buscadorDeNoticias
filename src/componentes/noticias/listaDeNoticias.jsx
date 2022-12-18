
import Noticia from "./noticias"

const ListaNoticias = ({
    noticias
}) => {

    return noticias.map((noticia)=>{
        return <Noticia noticia = {noticia}/>
    })
}

export default ListaNoticias;