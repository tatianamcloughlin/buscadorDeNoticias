
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from '@mui/material/Fab';

const Flecha=()=>{
    return(
        <Fab 
        color="primary" 
        aria-label="add"
        href='#'
        sx={{
            position:'fixed',
            cursor: 'pointer',
            size:'small',
            width: '41px',
            height: '41px',
            background:'hsla(0, 3%, 6%, 0.43)',
            bottom:'70px',
            right:'20px',
        }}>
        
        <KeyboardArrowUpIcon/>
        </Fab>
    )
}

export default Flecha;