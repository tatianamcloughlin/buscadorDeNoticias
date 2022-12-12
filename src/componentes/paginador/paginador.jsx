import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Paginador=({
  cantidadDePaginas,
  onChange
})=> {
  const cambioPagina =(_evento,pagina)=>{
    onChange(pagina)

  };
  return (
    <Stack spacing={2}>
      <Pagination 
      count={cantidadDePaginas} 
      shape="rounded" 
      onChange={cambioPagina}/>
    </Stack>
  );
}

export default Paginador;