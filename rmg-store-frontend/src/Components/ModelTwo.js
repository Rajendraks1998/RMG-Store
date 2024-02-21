import React from 'react';

import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';

import { Button, DialogActions, IconButton, TextField,} from '@mui/material';

import { Close } from '@mui/icons-material';

import axios from 'axios';



const ModelTwo = ({

  open1,setOpen1,

  user,setUser,

  password,setPassword,

  content,setContent,id,data,

  date,time

}) => {



   

  const HandleClose =()=>{

    setOpen1(false)

     

  }



  const HandleUpdate =async()=>{

    await axios.put(`http://localhost:8000/posts/${id}`,{username:user,password,content,date,time})

    .then((resp)=>console.log(resp.data))

    .catch((err)=>console.log(err))

    data()

    setOpen1(false)

  }

   

  // console.log(user,password,content)

 return (

  <div>

    

     

      <Dialog open={open1} maxWidth={'xs'} onClose={HandleClose} fullWidth>

        <DialogTitle>

          Details of : <span>{user}</span>

        </DialogTitle>

        <IconButton

          aria-label="close"

          onClick={HandleClose}

          sx={{

            position: 'absolute',

            right: 10,

            top: 10,

          }}

        >

          <Close/>

        </IconButton>

        <DialogContent dividers>

          <TextField 

            type='text' 

            value={user} 

            onChange={(e)=>setUser(e.target.value)}

            margin='dense'

            fullWidth

            label="Username"

          >



          </TextField><br/>

          <TextField 

            type='text' 

            value={password} 

            onChange={(e)=>setPassword(e.target.value)}

            margin='dense'

            fullWidth

            label="Password"

          >



          </TextField><br/>

          <TextField 

            type='text' 

            value={content} 

            onChange={(e)=>setContent(e.target.value)}

            margin='dense'

            fullWidth

            label="Content"

          >



          </TextField>

        </DialogContent>

        <DialogActions dividers>

          <Button onClick={HandleUpdate} variant='contained'>Update</Button>

        </DialogActions>

      </Dialog>

     

  </div>

 )

}





export default ModelTwo;