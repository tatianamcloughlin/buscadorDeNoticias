

const NoHayNoticia =()=>{
    return(
        <div style={{
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <img src="./imagenes/Error.svg.png" alt="no hay noticias relacionadas a su busqueda"  
            style={{ 
            width: 130 ,
            filter: 'dropShadow(-2px 1px 6px black)'}} />
            <h4 style={{color:"#425c82"}}> Lo sentimos,  no hay noticias relacionadas a su busqueda!</h4>
        </div>
    )
}

export default NoHayNoticia;