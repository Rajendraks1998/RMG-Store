

import React, { useState } from 'react';

import {

  Route,

  Routes,

  BrowserRouter

 } from "react-router-dom";

 import Navbar from "./Navbar";

 import About from "./About";

 import CrudApp from "./CrudApp";

 import Home from "./Home";

 import Timer from "./Timer";

 import Add from "./Add";

import SignIn from './SignIn';

import SignOut from './SignOut';

import View from './View';







const UserHome = ({setImg}) => {

  const[show,setShow]=useState(false)

  const[show1,setShow1]=useState(true)

  const[sin,setSin]=useState(false)

  const[sou,setSou]=useState(false)

  const[opens,setOpens]=useState(true)

  const[opens1,setOpens1]=useState(true)



  const HandleSignIn =()=>{

    setSin(true)

    setOpens(true)

    setImg(false)

     

  }



  const HandleSignOut =()=>{

    setSou(true)

    setOpens1(true)

  }

  return (

    <div>

      {/* {

        show1 && 

        // <AppBar position="static">

        //   <Toolbar>



        //     <IconButton

        //       size="large"

        //       edge="start"

        //       color="inherit"

        //       aria-label="menu"

        //       sx={{ mr: 2 }}

        //       title='icon1'

        //     >

        //       <Menu />

        //     </IconButton>



        //     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

        //       MY APP

        //     </Typography>

        //     <Button color="inherit" onClick={HandleSignIn}>SIGN IN</Button>

        //     <Button color="inherit" onClick={HandleSignOut}>SIGN UP</Button>

        //   </Toolbar>

        // </AppBar>

      } */}

       

      <div>

        {

          sin && <SignIn opens={opens} setOpens={setOpens} setShow1={setShow1} setShow={setShow} />

        }

      </div>

      <div>

        {

          sou && <SignOut opens1={opens1} setOpens1={setOpens1}/>

        }

      </div>

      <div>

      {

        show && 

        <BrowserRouter>

          <Navbar setShow={setShow} setShow1={setShow1} setImg={setImg}>

          <Routes>

            {/* <Route exact path="/" element={<Navbar/>}></Route> */}

            <Route path="Home" element={<Home />} />

            <Route path="Timer" element={<Timer />} />

            <Route path="About" element={<About />} />

            <Route path="CrudApp" element={<CrudApp />} />

            <Route path="Add" element={<Add />} />

            <Route path='view' element={<View/>}></Route>

             

          </Routes>

          </Navbar>

        </BrowserRouter>

      }

      </div>

    </div>

  )

}



export default UserHome;