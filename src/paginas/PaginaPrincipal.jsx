import Header from "../componentes/header/header";
import Footer from "../componentes/footer/footer";
import'../App.css';
import Buscador from "../componentes/buscador/buscador";
import Noticia from "../componentes/noticias/noticias";
import Loading from "../componentes/loading/loading";
import Paginador from "../componentes/paginador/paginador";
import { useEffect } from "react";
import { useState } from "react";
import { getListadoNoticias } from "../servicios/noticias";
import ListaNoticias from "../componentes/noticias/listaDeNoticias";
import { color } from "@mui/system";
import CapsulaDataTime from "../componentes/capsulaDataTime/capsulaDataTime";



const PagPrincipal =()=>{
    const [noticias, setNoticias] = useState();
    const [loading, setLoading] = useState(false);
    const [totalResultados, setTotalResultados]=useState();

    const onBuscar=async(criterioDeBusqueda)=>{
        setLoading(true)
        const {articles:noti , totalResults }= await getListadoNoticias(criterioDeBusqueda)
        setTotalResultados(totalResults);
        setNoticias(noti);
        setLoading(false)

       
    };

    console.log(noticias)
    console.log(totalResultados)

    let numeroNoticias = 0
    if( totalResultados <10 ){
        numeroNoticias = totalResultados}
    else{ numeroNoticias = 10}
    

    


    return (
    <main className="container">
        <Header/>
        {!noticias && <CapsulaDataTime/>}
        <Buscador  onBuscar ={onBuscar}/>
        {noticias && <div style={{color:'#596d8a'}}>Está viendo {numeroNoticias} noticias de {totalResultados} resultados </div>}
        {loading && <Loading/>}
        {noticias && <ListaNoticias noticias ={noticias} />}
        {noticias && <Paginador />}
        <br />
        <Footer/>
    </main>
    )
};

export default PagPrincipal;