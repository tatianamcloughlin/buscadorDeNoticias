import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading=()=> {
  return (
    <Box sx={{ display: 'flex', marginTop:4 }}>
      <CircularProgress />
    </Box>
  );
}

export default Loading ;