import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DEFAULT_IMAGE } from '../../libs/constantes';
import { DateTime } from 'luxon';

const Noticia=({
    noticia
})=> {
    const fechaPublicacion=()=>{
        const fechaForm = DateTime.fromISO(noticia.publishedAt)
        const fechaOutput = fechaForm.toFormat("DD 'a las' hh:mm 'hs'")
        return fechaOutput;
    }
    

  return (
    <Card sx={{ 
        maxWidth: 400, 
        marginTop:5, 
        background:'#c5b0b0', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',}}>
      <CardMedia
        component="img"
        alt="imagen default"
        height="240"
        image={noticia.urlToImage === 'null'? DEFAULT_IMAGE : noticia.urlToImage}
      />
      <CardContent>
        <Typography gutterBottom 
        component="div"
        fontSize='15px'
        fontWeight='bold'
        color='#596d8a'>
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
        color='#596d8a'
        fontSize='10px'
        >
           {fechaPublicacion()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Noticia;