
import Header from "../componentes/header/header";
import Footer from "../componentes/footer/footer";
import'../App.css';
import Buscador from "../componentes/buscador/buscador";
import Loading from "../componentes/loading/loading";
import Paginador from "../componentes/paginador/paginador";
import { useEffect, useState } from "react";
import { getListadoNoticias } from "../servicios/noticias";
import ListaNoticias from "../componentes/noticias/listaDeNoticias";
import { color } from "@mui/system";
import {CapsulaDataTime} from "../componentes/capsulaDataTime/capsulaDataTime";
import "./paginappal.css"
import Flecha from "../componentes/frecha/flecha";
import { useParams } from "react-router-dom";



const PagNoticia =()=>{
    const {id} = useParams();

    useEffect(()=>{

    },{});


    return (
    <main className="container">
        <Header />
        <h1>detalle peli {id}</h1>
        <Footer/>
    </main>
    )
};


export default PagNoticia;