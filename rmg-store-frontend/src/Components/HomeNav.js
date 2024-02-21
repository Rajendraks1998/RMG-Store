import React from 'react';
import { AppBar, Button, IconButton, Menu, Toolbar, Typography } from '@mui/material';
import image from "../Images/logo.jpeg";
import { useNavigate } from 'react-router-dom';


const HomeNav = () => {

  let history = useNavigate()


  const HandleSignIn =()=>{
      history("/signin")
  }

  const HandleSignUp =()=>{
    history("/signup")
  }
  
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            title='icon1'
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MY APP
          </Typography>
          <Button color="inherit" onClick={HandleSignIn}>Sign In</Button>
          <Button color="inherit" onClick={HandleSignUp}>Sign Up</Button>
        </Toolbar>
      </AppBar>
      <br/>
      <div>
        <img src={image} alt='' width="100%" height={575} ></img>
      </div>
    </div>
  )
}

export default HomeNav;
