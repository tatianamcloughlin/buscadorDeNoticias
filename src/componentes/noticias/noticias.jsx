import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DEFAULT_IMAGE } from '../../libs/constantes';
import { fechaActual,hora,now } from '../../libs/constantes';


const Noticia=({
    noticia
})=> {
    console.log(noticia)
    console.log(now );
  return (
    <Card sx={{ 
        maxWidth: 400, 
        marginTop:5, 
        background:'#c5b0b0' }}>
      <CardMedia
        component="img"
        alt="imagen default"
        height="240"
        image={noticia.urlToImage == 'null'? DEFAULT_IMAGE : noticia.urlToImage}
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
        <Typography>

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