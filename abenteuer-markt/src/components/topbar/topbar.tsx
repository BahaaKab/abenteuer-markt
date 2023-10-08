

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';



const Topbar=()=>{


    return(
        <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor: '#283479' }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
        >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ color: 'white' , flexGrow: 0.1 }}>
          <Button color="inherit">Startseite</Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ color: 'white' , flexGrow: 0.1 }}>
          <Button color="inherit">Bastel- & DIY-benteuer finden</Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ color: 'white' , flexGrow: 0.1 }}>
          <Button color="inherit">Login-Bereich</Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ color: 'white' , flexGrow: 0.1 }}>
          <Button color="inherit">Unsere App</Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ color: 'white' , flexGrow: 1 }}>
          <Button color="inherit">Kontakt</Button>
          </Typography>

          <Button sx ={{flexGrow: 0.25}}color="inherit">Profil</Button>
          <Button color="inherit">Anmelden</Button>
        </Toolbar>
      </AppBar>
    </Box>
        </>
    )
}


export default Topbar