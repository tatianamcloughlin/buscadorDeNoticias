import Header from "../componentes/header/header";
import Footer from "../componentes/footer/footer";
import'../App.css';
import Buscador from "../componentes/buscador/buscador";
import Loading from "../componentes/loading/loading";
import Paginador from "../componentes/paginador/paginador";
import { useState } from "react";
import { getListadoNoticias } from "../servicios/noticias";
import ListaNoticias from "../componentes/noticias/listaDeNoticias";
import { color } from "@mui/system";
import CapsulaDataTime from "../componentes/capsulaDataTime/capsulaDataTime";
import "./paginappal.css"



const PagPrincipal =()=>{
    const [noticias, setNoticias] = useState();
    const [loading, setLoading] = useState(false);
    const [totalResultados, setTotalResultados]=useState();
    const [cantidadDePaginas, setCantidadDePaginas] = useState(1);
    const [criterioDeBusqueda , setCriterioDeBusqueda] = useState('');
    

    const onBuscar=async(criterioDeBusqueda, pagina=1)=>{
        setLoading(true)
        const {articles:noti , totalResults }= await getListadoNoticias(criterioDeBusqueda,pagina)
        setCriterioDeBusqueda(criterioDeBusqueda);
        setTotalResultados(parseInt(totalResults));
        setCantidadDePaginas (Math.ceil(parseInt(totalResults)/10));
        setNoticias(noti);
        setLoading(false)     
    };

    const onCambioPagina=(pagina)=>{
        onBuscar(criterioDeBusqueda,pagina)
        

    }

    let numeroNoticias = 0
    if( totalResultados <10 ){
        numeroNoticias = totalResultados}
    else{ numeroNoticias = 10}
    

    return (
    <main className="container">
        <Header/>
        {!noticias && <CapsulaDataTime />}
        <Buscador  onBuscar ={onBuscar} />
        {noticias && <div style={{color:'#596d8a'}}>Está viendo {numeroNoticias} noticias de {totalResultados} resultados </div>}
        {loading && <Loading/>}
        <div className="ContListNot">
        {noticias && <ListaNoticias noticias ={noticias} />}
        </div>
        {noticias && <Paginador cantidadDePaginas = {cantidadDePaginas} onChange={onCambioPagina}/>}
        <br />
        <img src="" alt="" />
        <Footer/>
    </main>
    )
};

export default PagPrincipal;