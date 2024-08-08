import pool from "../db/db.js";
import bcrypt from "bcrypt"

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
          return res.status(500).json("Password update")
} catch (error) {
    return res.status(400).json("error with token")
}

}
export default resetpassword;