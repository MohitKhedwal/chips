import { Router as router } from "express";
import pool from "../db/db.js";
import bcrypt from "bcrypt"
import token from "../utility/tokenGenerator.js";

const registerUser=async(req,res,next)=>{
    const { email, password,role } = req.body;

    try {
      const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
        email
      ]);
  
      if (user.rows.length > 0) {
        return res.status(401).json("User already exist!");
      }
  
      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(password, salt);
  
      let newUser = await pool.query(
        "INSERT INTO users ( user_email, user_password,user_role) VALUES ($1, $2,$3) RETURNING *",
        [ email, bcryptPassword,role]
      );
  
      const jwtToken = token(newUser.rows[0].user_id);
  
      return res.json({ jwtToken ,msg:"Register successfully"});
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server eeerror");
    }


//     const {email,password}=req.body
//  try {
// const user=await pool.query("SELECT FROM users WHERE user_email=$1",[email])

// if(user.rows.length >0){
//     return res.status(401).send("USER EXISTS")
// }

// const salt =await bcrypt.genSalt(10)
// const hashedPassword = await bcrypt.hash(password, salt)

// const newUser=await pool.query("INSERT INTO users(user_email,user_password) VALUES($1,$2) RETURNING",[user_email,hashedPassword]);
// res.status(200).send("USER REGISTERED")

// const jwttoken= token(newUser.rows[0].user_id)
// return res.json({jwttoken})
//  } catch (error) {
//     res.status(500).send("Serverr Error")
//  }   
}

export default registerUser