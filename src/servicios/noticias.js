const API_KEY = '20f010a181444cea9fb952953bfd5cb9'
const OMDB_API = 'https://newsapi.org';

export const getListadoNoticias = async (criterioDeBusqueda) => {
    const respuesta = await fetch( `${OMDB_API}/v2/everything?q=${criterioDeBusqueda}&language=es&pageSize=10&sortBy=publishedAd&apiKey=20f010a181444cea9fb952953bfd5cb9`);
    const noticias = await respuesta.json();
    return noticias;}


