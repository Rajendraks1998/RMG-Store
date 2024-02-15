import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import image from '../Images/storess.jpg';



const Header = ({HandleClickIn,HandleClickUp}) => {

  
  

  // const menu = [
  //   {
  //     name:'SIGN IN',
  //     path:'signin'
  //   },
  //   {
  //     name:'SIGN UP',
  //     path:'signup'
  //   }
  // ];

 
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
    
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome To RMG Store
          </Typography>
            <div>
              <Button color="inherit" onClick={HandleClickIn}>SIGN IN</Button>
              <Button color="inherit" onClick={HandleClickUp}>SIGN UP</Button>
            </div>
        </Toolbar>
      </AppBar><br/>
      <img src={image} alt='img' width={1554} height={613}></img>
    </Box>
    
    </div>
  )
}

export default Header
