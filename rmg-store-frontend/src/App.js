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
import UserCart from "./Components/UserCart";
import Billing from "./Components/Billing";
import ProtectdRoute from "./Components/ProtectdRoute";

const path = ()=>{
    if(window.location.pathname === "/"){
        sessionStorage.clear()
    }
}
function App() {
    return (
        <div className="App">
            {path()}
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomeNav />} />
                    <Route path="/" element={<ProtectdRoute/>}>
                        <Route exact path="user" element={<Navbar />}>
                            <Route path="profile" element={<Home />} />
                            {/* <Route path="timer" element={<Timer />} /> */}
                            <Route path="products" element={<Products />}>
                            <Route path="billing" element={<Billing />} />
                            </Route>
                            <Route path="cart" element={<UserCart />} />
                            {/* <Route path="crudApp" element={<CrudApp />} /> */}
                            {/* <Route path="add" element={<Add />} /> */}
                            {/* <Route path='view' element={<View/>}/> */}
                        </Route>
                    </Route>
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignOut />} />
                </Routes>
            </BrowserRouter>
        </div>
    );

}

export default App