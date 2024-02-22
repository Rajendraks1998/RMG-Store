import React, { useState } from 'react';
import { NavLink,} from 'react-router-dom';
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Tooltip, Typography, colors } from '@mui/material';
import { Home, Menu } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
// import { Add } from '@mui/icons-material';
// import AppsIcon from '@mui/icons-material/Apps';
// import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { useNavigate } from 'react-router-dom';
import image from "../Images/logo2.jpeg";
import { Outlet } from 'react-router-dom';

const Navbar = ({children,setShow,setShow1,setImg}) => {
  const[icon1,setIcon1]=useState(true)
  const[icon2,setIcon2]=useState(false)
  const[width,setWidth]=useState(60)

  let history = useNavigate()

  const HandleIcon =(path)=>{
   history(`/${path}`)
  }



  const HandleListItem =(path)=>{
   history(`/${path}`)
  }

  // window.location.reload(history("/"));


  const MenuItem = [
    {
      name:"Profile",
      path:"user/profile",
      icon:<Home color="primary"/>,
      title:"To Profile Page"
    },
    // {
    //  name:"Add",
    //  path:"user/add",
    //  icon:<Add color="primary" />,
    //  title:"To Add Page"
    // },
    // {
    //   name:"Timer",
    //   path:"user/timer",
    //   icon:<AccessTimeFilledIcon color="primary" />,
    //   title:"To Timer Page"
    // },
    // {
    //   name:"CrudApp",
    //   path:"user/crudApp",
    //   icon:<AppsIcon color="primary"/>,
    //   title:"To CrudApp Page"
    // },

    {
      name:"Products",
      path:"user/products",
      icon:<InfoIcon color="primary"/>,
      title:"To About Page"
    }

  ]

  const HandleDrawer =()=>{
    setWidth(170)
    setIcon1(false)
    setIcon2(true)
  }

  const HandleDrawer1 =()=>{
    setWidth(60)
    setIcon1(true)
    setIcon2(false)
  }

  // const HandleOver =()=>{
  // setWidth(170)
  // }

  // const HandleOut =()=>{
  // setWidth(60)
  // }

  const HandleClick =()=>{
   history("/")
  //  setShow(false)
  //  setShow1(true)
  //  setImg(true)
  }

 return (
  <div style={{display:'flex'}}>
   <Drawer
    sx={{
     width: width,
     flexShrink: 0,
     '& .MuiDrawer-paper': {
      width: width,
      boxSizing: 'border-box',
     },

    }}
    variant="permanent"
    anchor="left"
   >

    <img src={image} alt='logo' width={width} height={63}></img>
    <Divider>
    </Divider>
    {/* onMouseOver={HandleOver} onMouseOut={HandleOut} */}
    <List >
     {MenuItem.map((text,i) => (
      <ListItem key={i} disablePadding onClick={()=>HandleListItem(text.path)} sx={{backgroundColor:colors.grey}} >
       <ListItemButton title={text.title}>
        <Tooltip title={text.name}>
         <ListItemIcon onClick={()=>HandleIcon(text.path)}>
          {text.icon}
         </ListItemIcon>
        </Tooltip>
        <ListItemText primary={<NavLink className={({isActive})=>{ return isActive ? colors.pink : colors.red
        }} to={text.path}>{text.name}</NavLink>} />
       </ListItemButton>
      </ListItem>
     ))}
    </List>
   </Drawer>

   <Box sx={{ flexGrow: 1 }}>
   <AppBar position="static">
    <Toolbar>
     {icon1 && 
     <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
      onClick={HandleDrawer}
      title='icon1'
     >
      <Menu />
     </IconButton>}
     {icon2 && 
     <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
      onClick={HandleDrawer1}
      title='icon2'
     >
      <Menu />
     </IconButton>}
     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      RMG-Stores
     </Typography>
     <Button color="inherit" onClick={HandleClick}>Sign Out</Button>
    </Toolbar>
   </AppBar>
   <div>
    <br/>
    <main style={{marginTop:2}}>
      <div>
        <Outlet/>
      </div>
    </main>
   </div>
  </Box>
  </div>
 )
}

export default Navbar