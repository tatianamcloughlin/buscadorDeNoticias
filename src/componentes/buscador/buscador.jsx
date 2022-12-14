import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { useState } from "react";

const Buscador =({
    onBuscar
})=> {
    const [criterioDeBusqueda , setCriterioDeBusqueda] = useState('');
    var mayorATres = false

    if (criterioDeBusqueda.length > 3){
        mayorATres = true
    }

    return (
    <Paper
      component="div"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '50%', marginTop: '20px', height:40, marginBottom:'20px' }}
      elevation={4}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 , marginLeft:'10px'}}
        placeholder="Buscar Noticia"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={criterioDeBusqueda}
        onChange={(e) => { 
            setCriterioDeBusqueda(e.target.value)
        }}

        onKeyDown={(e) => {
          if(mayorATres){
            if(e.key==='Enter'){
            setCriterioDeBusqueda(e.target.value)
            onBuscar(e.target.value)}
        }}}
        
      />
      
      <IconButton 
      type="button" 
      sx={{ p: '10px' }} 
      aria-label="search"
      onClick={()=>{
        onBuscar(criterioDeBusqueda)
      }} 
      disabled ={mayorATres ? false : true } >
      
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <SearchIcon />
      </IconButton>

    </Paper>
  );
}

export default Buscador;