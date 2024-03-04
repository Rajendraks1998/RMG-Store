import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
// import ButtonSlice from "./ButtonSlice";
import UserDataSlice from "./UserDataSlice";

const Store = configureStore({
  reducer:{
    user:UserSlice,
    // button:ButtonSlice
    userdata:UserDataSlice
  }
}) 

export default Store;