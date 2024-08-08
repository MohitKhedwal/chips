import pool from "../db/db.js"
import token from "../utility/tokenGenerator.js";
import nodemailer, { createTransport } from "nodemailer"
import { configDotenv } from "dotenv";

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
export default forgotpassword