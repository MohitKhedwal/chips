import pool from "../db/db.js"
import token from "../utility/tokenGenerator.js";
import nodemailer, { createTransport } from "nodemailer"
import { configDotenv } from "dotenv";
import bcrypt from "bcrypt"

configDotenv({
    path:"./.env"
})

const forgotpassword= async (req,res,next)=>{
    const {email}=req.body
    try{
      const user =await pool.query("SELECT  user_id FROM users WHERE user_email=$1",[email])
        if(user.rows.length==0){
            return res.status(404).json({message:"User not found"});
        }
        console.log(user.rows[0].user_id)
        const jwttoken=token(user)
        let transporter = createTransport({
            service: 'gmail',
            auth: {
              user: process.env.CHIPS_EMAIL,
              pass: process.env.CHIPS_PASSWORD
            }
          });
          
          let mailOptions = {
            from: process.env.CHIPS_EMAIL,
            to: email,
            subject: 'Reset your password',
            text: `http://localhost:3000/reset-password/${user.rows[0].user_id}/${jwttoken}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent Successfully:  ' + info.response);
              return res.status(500).json("Mail Send successfully")
            }
          });

    }catch(e){
        return res.status(400).json("SERVER ERROR WHILE FORGOT PASSWORD")
    }


}




const resetpassword= async(req,res,next)=>{
    const {user_id,token}=req.params
    const {password}=req.body

try {
        const user = await pool.query("SELECT * FROM users WHERE user_id=$1",[user_id])
    
    
        const salt = await bcrypt.genSalt(10);
        const newPassword = await bcrypt.hash(password, salt);
          
        await pool.query(
            'UPDATE users SET user_password = $1 WHERE user_id = $2',
            [newPassword,user_id]
          );
          alert("password updated");
          return res.status(500).json("Password update")
} catch (error) {
    return res.status(400).json("error with token")
}

}


const roleFetch=async (req,res)=>{

    try{
   const result=await pool.query("SELECT role_name,role_id FROM role");
   const roles=result.rows.map(role=>[role.role_id,role.role_name]);
   console.log(roles)
   return res.status(500).json(roles)

    }catch(error){
       console.log(error)
    }

}

const deptFetch= async (req,res)=>{

    try{
        const result =await pool.query("SELECT dept_name,dept_id FROM departments")
        const departments=result.rows.map(dept=>[dept.dept_id,dept.dept_name]);
        console.log(departments);
        return res.status(500).json(departments)
    }catch(e){
        console.log(e)
        return res.status(400).json(e)

    }
}


const getrole=async(req,res)=>{
  const {id}=req.body
  try{
    const result= await pool.query("SELECT user_role FROM users WHERE user_id=$1",[id])
    const role=result.rows[0].user_role
    return res.status(500).json(role)
  }catch(e){
    console.log(e)
  }
}
const getname=async(req,res)=>{
  const {id}=req.body
  try{
    const result= await pool.query("SELECT user_name FROM users WHERE user_id=$1",[id])
    const name=result.rows[0].user_name
    return res.status(500).json(name)
  }catch(e){
    console.log(e)
  }
}
const getdept=async(req,res)=>{
  const {id}=req.body
  try{
    const result= await pool.query("SELECT user_dept FROM users WHERE user_id=$1",[id])
    const dept=result.rows[0].user_dept
    return res.status(500).json(dept)
  }catch(e){
    console.log(e)
  }
}
const getemail=async(req,res)=>{
  const {id}=req.body
  try{
    const result= await pool.query("SELECT user_email FROM users WHERE user_id=$1",[id])
    const email=result.rows[0].user_email
    return res.status(500).json(email)
  }catch(e){
    console.log(e)
  }
}


export {
  
}


export { forgotpassword,
    resetpassword,
    roleFetch,
    deptFetch,
    getrole,getname,getdept,
    getemail
}