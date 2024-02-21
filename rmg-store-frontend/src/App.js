


import HomeNav from "./Components/HomeNav";
import {
    Route,
    Routes,
    BrowserRouter
   } from "react-router-dom";
// import CrudApp from "./Components/CrudApp";
import Home from "./Components/Home";
// import Timer from "./Components/Timer";
// import Add from "./Components/Add";
// import View from './Components/View';
import SignIn from './Components/SignIn';
import SignOut from './Components/SignOut';
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";


function App() {

 return (
    
  <div className="App">
      <BrowserRouter>
          <Routes>
                  <Route exact path="/" element={<HomeNav/>}/>
                  <Route exact path="user" element={<Navbar />}>
                      <Route path="profile" element={<Home />} />
                      {/* <Route path="timer" element={<Timer />} /> */}
                      <Route path="products" element={<Products />} />
                      {/* <Route path="crudApp" element={<CrudApp />} /> */}
                      {/* <Route path="add" element={<Add />} /> */}
                      {/* <Route path='view' element={<View/>}/> */}
                    </Route>
                  <Route path="signin" element={<SignIn />} />
                  <Route path="signup" element={<SignOut />} />
          </Routes>
      </BrowserRouter>
  </div>
 );

}



export default App