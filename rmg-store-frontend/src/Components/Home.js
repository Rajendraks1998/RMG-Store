// import { DeleteOutline} from '@mui/icons-material'
// import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
// import { deepPurple } from '@mui/material/colors'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { red,blue } from '@mui/material/colors';

const Home = () => {

  const[datas,setDatas]=useState([])
  // const[show,setShow]=useState(false)
  // const[color,setColor]=useState(blue)

  const data =async()=>{
    await axios.get("http://localhost:8000/posts")
    .then((resp)=>setDatas(resp.data))
  }

  useEffect(()=>{
    data()
  },[])

  console.log(datas);

  // const HandleDelete =async(id)=>{
  //   await axios.delete(`http://localhost:8000/posts/${id}`)
  //   .then((resp)=>console.log(resp.data))
  //   await axios.get("http://localhost:8000/posts")
  //   .then((resp)=>setDatas(resp.data))
  // }

  // const HandleOver =()=>{
  //   setShow(true)
  // }

  // const HandleOut =()=>{
  //   setShow(false)
  // }

  // const HandleColorOver =()=>{
  //   setColor(red) 
  // }

  // const HandleColorOut =()=>{
  //   setColor(blue) 
  // }

 return (
  <div style={{display:'flex',flexWrap: 'wrap',}}>
    {/* {datas.map((item,i) =>{
      return(
      <Card sx={{width:325,margin:2}} key={item.id} onMouseOver={HandleOver} onMouseOut={HandleOut}>
        <CardHeader 
          title={<Typography variant='h5'>{item.username}</Typography>} 
          avatar={<Avatar sx={{ bgcolor: deepPurple[500] }}>{item.username[0]}</Avatar>}
          subheader={item.date + `,${item.time}`}
          action={ show && <IconButton onClick={()=>HandleDelete(item.id)} onMouseOver={HandleColorOver} onMouseOut={HandleColorOut}><DeleteOutline sx={{ color: `${color[400]}` }}/></IconButton>}
        >
        </CardHeader>
        <CardContent>
          <Typography variant='body1'>
            {item.content}
          </Typography>
        </CardContent>
      </Card>
      )
    })} */}
  </div>
 )
}

export default Home;