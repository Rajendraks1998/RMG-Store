import { Box, Paper,} from '@mui/material'

import React, { useState } from 'react';
import UserHome from './UserHome';



const Timer = () => {

  const CurrentTime = new Date().toLocaleTimeString()

  const[time,setTime]=useState(CurrentTime)



  setInterval(()=>{

    setTime(new Date().toLocaleTimeString())

  },1000)

 return (

  <Box >

    <Paper elevation={2}>

      <center><h1>Cureent Time : {time}</h1></center>

    </Paper>

    <UserHome></UserHome>

  </Box>


 )

}



export default Timer