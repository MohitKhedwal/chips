import { configureStore } from "@reduxjs/toolkit";
import isloggedin from "./isloggedin";


const store=configureStore({
    reducer:{
        logstatus:isloggedin // name of reducer and function to be called on reducder called
    }
})

export default store;