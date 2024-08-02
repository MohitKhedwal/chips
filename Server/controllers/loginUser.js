import { Router as router } from "express";
import pool from "../db/db.js";
import bcrypt from "bcrypt"
import token from "../utility/tokenGenerator.js";

const loginUser=async(req,res,next)=>{
    const {email,password}=req.body
    try {
        const user =await pool.query("SELECT * FROM users WHERE user_email=$1",[email])
        if(user.rows.length===0){
        return res.status(401).json("Invalid data")}
    
        const checkPassword=await bcrypt.compare(password,user.rows[0].user_password)
        if(!checkPassword){
            return res.status(401).json("incocrrect password")
        }
        const resultRole =await pool.query("SELECT user_role FROM users WHERE user_email=$1 ",[email])
        const jwttoken=token(user.rows[0].user_id)
        // console.log(role)
        const roleLevel=user.rows[0].user_role
        return res.json({jwttoken,msg:"logged in",roleLevel})


    } catch (error) {
        // return res.json({ms})
    console.log(error)
    }

}

export default loginUser