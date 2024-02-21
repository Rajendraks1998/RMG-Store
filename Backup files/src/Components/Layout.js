import React from 'react';
import { Button } from '@mui/material';
import {NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import image from '../Images/storess.jpg';



const Layout = ({children,setOpen,setOpen1,btns,btnout,setBtns,setBtnout,img,setImg}) => {

   

    const HandleClickOpen =()=>{
        setOpen(true);
        setOpen1(true);
       
    }   

    const HandleSignOut =()=>{
        setBtns(true)
        setBtnout(false)
        setImg(true)
    }
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
                        {
                            btns && <div>
                                <NavLink to={"/signin"}>
                                    <Button variant='contained' onClick={HandleClickOpen}>SIGN IN</Button>
                                </NavLink>
                                <span>  </span>
                                <NavLink to={"/signup"}>
                                    <Button variant='contained' onClick={HandleClickOpen}>SIGN UP</Button>
                                </NavLink>
                            </div>
                        }
                        {
                           btnout &&  <div>
                                <NavLink  to={'/'}>
                                    <Button variant='contained' onClick={HandleSignOut}>
                                        SIGN OUT
                                    </Button>
                                </NavLink>
                            </div>
                        }
                    </Toolbar>
                    </AppBar><br/>
            </Box>
            {
                img && <img src={image} alt='store' width="100%" height={600}></img>
            }
            
          <main>{children}</main>
        </div>
    )
}

export default Layout;
