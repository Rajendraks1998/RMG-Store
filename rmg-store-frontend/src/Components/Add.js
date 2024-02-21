import { Box, Button, Container, Divider, Paper, TextField, Typography } from '@mui/material';

import axios from 'axios';

import { useFormik } from 'formik';

import React from 'react';

import { useNavigate } from 'react-router-dom';





const Add = () => {



 const Dates = new Date().toString()



 const split = Dates.split(" ")



 const Day = split[0]

 const Month = split[1]

 const dates = split[2]

 const year = split[3]

 const time = split[4]



 const conncatDate = Month + " " + dates + " " + year 

 const conncatTime = Day + " " + time





 const history = useNavigate()



 const formik = useFormik({

  initialValues:{

   username:"",

   password:"",

   content:""

  },

  onSubmit:()=>{

   formik.resetForm()



   const {username,password,content} = formik.values



   axios.post("http://localhost:8000/posts",{username:username,password:password,content:content,date:conncatDate,time:conncatTime})

   .then((resp)=>console.log(resp.data))



   history("/Home")



  },

  validate:(values)=>{

   let errors = {}

   if(!values.username){

    errors.username = "username is required"

   }

   if(!values.password){

    errors.password = "password is required"

   }

   if(!values.content){

    errors.content = "content is required"

   }

   return errors;

  }

   

 })

 // const[inputs,setInputs]=useState({

 // username:"",

 // password:"",

 // content:""

 // })





 // const HandleChange =(e)=>{

 // let name = e.target.name

 // let value = e.target.value



 // setInputs({

 // ...inputs,

 // [name]:value

 // })

 // }



 // const HandleSubmit =(e)=>{

 // e.preventDefault()



  // axios.post("http://localhost:8000/posts",{username:inputs.username,password:inputs.password,content:inputs.content,date:conncatDate,time:conncatTime})

  // .then((resp)=>console.log(resp.data))



  // history("/Home")

 // }





 return (

  <div>

   <center>

    <Box sx={{width:800}}>

    

     <Paper elevation={3} >

      <Box sx={{width:600}}>

       <Container>

        <center>

        <Typography variant='h2'>

          Add

        </Typography>

        </center>

        <Divider></Divider>

        <form autoComplete='off' onSubmit={formik.handleSubmit}>

         <TextField 

          type='text' 

          label="Username" 

          margin='dense' 

          fullWidth

          name='username'

          value={formik.values.username}

          onChange={formik.handleChange}

         />

         {formik.errors.username ? <Typography variant='body1' color='error'>{formik.errors.username}</Typography>:null}

         <br/>

         <TextField 

          type='text' 

          label="Password" 

          margin='dense' 

          fullWidth

          name='password'

          value={formik.values.password}

          onChange={formik.handleChange}

         />

         {formik.errors.password ? <Typography variant='body1' color='error'>{formik.errors.password}</Typography>:null}

         <br/>

         <TextField 

          type='text' 

          label="Content" 

          margin='dense' 

          fullWidth 

          multiline rows={4}

          name='content'

          value={formik.values.content}

          onChange={formik.handleChange}

         />

         {formik.errors.content ? <Typography variant='body1' color='error'>{formik.errors.content}</Typography>:null}

         <br/><br/>

         <Button

          type='submit' 

          variant='contained' 

          color='primary' 

          sx={{width:100,marginBottom:2,height:40}}>

            Submit

         </Button>

        </form>

       </Container>

      </Box>

     </Paper>

      

    </Box>

   </center>

  </div>

 )

}



export default Add;