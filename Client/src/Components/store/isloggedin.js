import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null,
    status:false
}
const isloggedin=createSlice({
    name:"logstatus",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.user=action.payload.user;

        },
        logout:(state,action)=>{
            state.status=false;
            state.user=null;

        },

    }
})

export const {logout,login}=isloggedin.actions
export default isloggedin.reducer