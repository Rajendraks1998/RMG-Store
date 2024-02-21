
import { useState } from "react";
import { BrowserRouter as  Router } from "react-router-dom";
import {Routes,Route } from "react-router-dom";

import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Layout from './Components/Layout';
import User from "./Components/User";



function App() {
  const[open,setOpen]=useState(false);
  const[open1,setOpen1]=useState(false);
  const[btns,setBtns]=useState(true);
  const[btnout,setBtnout]=useState(false);
  const[img,setImg]=useState(true);
  
  return (

    <div className="App">
        <Router>
          <Layout setOpen={setOpen} setOpen1={setOpen1} btns={btns} btnout={btnout} setBtns={setBtns} setBtnout={setBtnout} img={img} setImg={setImg}/>
          <Routes>
            <Route path="/signin" element={<SignIn  open={open1} setOpen={setOpen1} setBtns={setBtns} setBtnout={setBtnout} setImg={setImg}/>}></Route>
            <Route path="/signup" element={<SignUp open={open} setOpen={setOpen}/>}></Route>
            <Route path="/user" element={<User/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
