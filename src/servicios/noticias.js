const OMDB_API = 'https://newsapi.org';

export const getListadoNoticias = async (criterioDeBusqueda,paginaActuaL) => {
    const respuesta = await fetch( `${OMDB_API}/v2/everything?q=${criterioDeBusqueda}&language=es&pageSize=10&sortBy=publishedAd&page=${paginaActuaL}&apiKey=79c656a01b09432980acdc1a556ec014`);
    const noticias = await respuesta.json();
    return noticias;}


