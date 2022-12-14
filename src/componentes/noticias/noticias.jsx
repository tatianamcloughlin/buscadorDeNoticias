import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DEFAULT_IMAGE } from '../../libs/constantes';
import { DateTime } from 'luxon';
import './noticias.css'
import { NavLink } from 'react-router-dom';

const Noticia=({
    noticia
})=> {
    const fechaPublicacion=()=>{
        const fechaForm = DateTime.fromISO(noticia.publishedAt)
        const fechaOutput = fechaForm.toFormat("DD 'a las' hh:mm 'hs'")
        return fechaOutput;
    }
console.log(noticia)
  return (
    <Card 
      sx={{ 
        width: 400, 
        marginTop:5, 
        background:'rgba(0, 0, 0, 0.2)', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '10px',
        flexWrap: 'wrap',
        marginLeft: '20px',
        '&:hover': {
          boxShadow: '0px 4px 6px -3px rgb(0 0 0 / 20%), 0px 6px 7px 0px rgb(0 0 0 / 14%), 0px 3px 12px 0px rgb(0 0 0 / 12%)'
        }
        }}
      elevation={1} >       
      <CardMedia
        component="img"
        alt="imagen default"
        height="240"
        image={noticia.urlToImage === null ? DEFAULT_IMAGE : noticia.urlToImage}
      />
      <CardContent>
        <Typography gutterBottom 
        component="div"
        fontSize='15px'
        fontWeight='bold'
        color='#708090'>
          {noticia.source.name}
        </Typography>

        <Typography 
        gutterBottom 
        variant="h5" 
        component="div"
        fontWeight='bold'>
          {noticia.title}
        </Typography>
        <Typography
        color='#394659'
        fontSize='13px'
        >
           {fechaPublicacion()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>
        <a href={noticia.url} 
        target='en_blank' style={{textDecoration:'none',color: '#1976d2', fontSize: '0.8125rem'}}>
            IR A FUENTE</a>
        </Button>
        <Button  size="small">
          <NavLink to='/:id' style={{textDecoration:'none',color: '#1976d2', fontSize: '0.8125rem'}}>LEER MAS</NavLink>
          </Button>
      </CardActions>
    </Card>
  );
}

export default Noticia;