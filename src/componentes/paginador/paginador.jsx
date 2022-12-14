
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './paginador.css'

const Paginador=({
  cantidadDePaginas,
  onChange
})=> {
  const cambioPagina =(_evento,pagina)=>{
    onChange(pagina)

  };
  return (
    <Stack spacing={2} >
      <Pagination 
      count={cantidadDePaginas} 
      shape="rounded" 
      onChange={cambioPagina}
      sx={{
        color:'#a7aeb9',
        marginTop:'10px',
        marginBottom:'10px'

      }}/>
    </Stack>
  );
}

export default Paginador;