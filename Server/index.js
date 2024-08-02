import express from "express"
import { json } from "express";
import cors from "cors"


const app=express();
// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// routes
import userroutes from "./route/userroutes.js"
app.use("/api",userroutes)

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})