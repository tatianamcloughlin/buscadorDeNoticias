
import Noticia from "./noticias"

const ListaNoticias = ({
    noticias
}) => {
    // const navigate = useNavigate();
    // const onPeliculaClick = ({ imdbID }) => {
    //   navigate(`/peliculas/${imdbID}`);
    // }
    return noticias.map((noticia)=>{
        return <Noticia noticia = { noticia}/>
    })
}

export default ListaNoticias;