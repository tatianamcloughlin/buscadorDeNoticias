import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Paginador=()=> {
  return (
    <Stack spacing={2}>
      <Pagination count={5} shape="rounded" />
    </Stack>
  );
}

export default Paginador;