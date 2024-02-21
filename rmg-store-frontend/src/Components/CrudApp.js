import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';

import TableBody from '@mui/material/TableBody';

import TableCell from '@mui/material/TableCell';

import TableContainer from '@mui/material/TableContainer';

import TableHead from '@mui/material/TableHead';

import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

import axios from 'axios';

import VisibilityIcon from '@mui/icons-material/Visibility';

import EditIcon from '@mui/icons-material/Edit';

import DeleteIcon from '@mui/icons-material/Delete';

import Modal from './Modal';

import { Tooltip } from '@mui/material';

import ModelTwo from './ModelTwo';

import Checkbox from '@mui/material/Checkbox';

import FormControlLabel from '@mui/material/FormControlLabel';







const CrudApp = () => {

  const [open, setOpen] = useState(false)

  const [show, setShow] = useState(false)

  const [open1, setOpen1] = useState(false)

  const [show1, setShow1] = useState(false)

  const [view, setView] = useState([])

  const [user, setuser] = useState("")

  const [password, setPassword] = useState("")

  const [content, setContent] = useState("")

  const [id, setId] = useState(0)

  const [date, setDate] = useState("")

  const [time, setTime] = useState("")

  const [checked, setChecked] = useState(false)

  const [disable, setDisable] = useState(true)





  const update = (data) => {

    setuser(data.username)

    setPassword(data.password)

    setContent(data.content)

    setDate(data.date)

    setTime(data.time)

  }



  const HandleOpen = (id) => {

    setOpen(true)

    setShow(true)



    axios.get(`http://localhost:8000/posts/${id}`)

      .then((resp) => setView([resp.data]))

  }



  const HandleDelete = async (id) => {

    await axios.delete(`http://localhost:8000/posts/${id}`)

      .then((resp) => console.log(resp.data))

    data()

  }



  const HandleEdit = (id) => {

    setOpen1(true)

    setShow1(true)



    axios.get(`http://localhost:8000/posts/${id}`)

      .then((resp) => update(resp.data))

      .catch((err) => console.log(err))



    setId(id)



  }



  const HandleChangeCheck = (item, e) => {

    setChecked(e.target.checked)

    if (checked === true) {

      setDisable(true)

    } else {

      setDisable(false)

    }

    console.log(item)

  }









  const [search, setSearch] = useState({

    username: "",

    password: "",

    content: ""

  })



  const [Data, setData] = useState([])





  const HandleChange = (e) => {

    const { name, value } = e.target;



    setSearch({

      [name]: value

    })

  }





  const data = async () => {

    await axios.get("http://localhost:8000/posts")

      .then((resp) => setData(resp.data))

  }



  useEffect(() => {

    data()

  }, [])









  return (





    <div>





      <TextField variant='outlined' autoComplete='off' name='username' value={search.username} onChange={HandleChange} placeholder='Search UserName'></TextField><span> </span><span> </span><span> </span>

      <TextField variant='outlined' autoComplete='off' name='password' value={search.password} onChange={HandleChange} placeholder='Search Password'></TextField><span> </span><span> </span><span> </span>

      <TextField variant='outlined' autoComplete='off' name='content' value={search.content} onChange={HandleChange} placeholder='Search Content'></TextField><span> </span><span> </span><span> </span>

      <br /><br />

      {checked && <Button variant="contained">Delete All</Button>}

      {checked && <br />}

      {checked && <br />}

      <div>

        <TableContainer component={Paper}>

          <Table>

            <TableHead>

              <TableRow>

                <TableCell align='center'><FormControlLabel control={<Checkbox checked={checked} onChange={(e) => HandleChangeCheck(checked ? 'no Data' : Data.map((item) => item), e)} />} /></TableCell>

                <TableCell align='center'>UserName</TableCell>

                <TableCell align='center'>Password</TableCell>

                <TableCell align='center'>Content</TableCell>

                <TableCell align='center'>Date</TableCell>

                <TableCell align='center'>Actions</TableCell>

              </TableRow>

            </TableHead>

            <TableBody>

              {

                Data.filter((item) => {

                  if (search.username === "") {

                    return item

                  }

                  else if (item.username.includes(search.username)) {

                    return item.username

                  }

                }).map((item) => {

                  return (

                    <TableRow>

                      <TableCell align='center'>

                        <FormControlLabel control={<Checkbox checked={checked} disabled={disable} />} />

                      </TableCell>

                      <TableCell align='center'>{item.username}</TableCell>

                      <TableCell align='center'>{item.password}</TableCell>

                      <TableCell align='center'>{item.content}</TableCell>

                      <TableCell align='center'>{item.date}</TableCell>

                      <TableCell align='center'>

                        <Tooltip title="View">

                          <Button variant='contained' onClick={() => HandleOpen(item.id)}><VisibilityIcon /></Button>

                        </Tooltip><span> </span>

                        <Tooltip title="Edit">

                          <Button variant='contained' onClick={() => HandleEdit(item.id)}><EditIcon /></Button>

                        </Tooltip><span> </span>

                        <Tooltip title="Delete">

                          <Button variant='contained' onClick={() => HandleDelete(item.id)}><DeleteIcon /></Button>

                        </Tooltip>

                      </TableCell>

                    </TableRow>

                  )

                })

              }



            </TableBody>

          </Table>

        </TableContainer>

        {

          show &&

          <Modal open={open} setOpen={setOpen} view={view} />

        }

        {

          show1 &&

          <ModelTwo

            open1={open1}

            setOpen1={setOpen1}

            user={user} setUser={setuser}

            password={password} setPassword={setPassword}

            content={content} setContent={setContent}

            id={id}

            data={data}

            time={time}

            date={date}

          />

        }



      </div>

    </div>

  )

}



export default CrudApp;