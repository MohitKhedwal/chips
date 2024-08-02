import pool from "../db/db.js"

export const readUser=async(req,res,next)=>{
// used to 
    try {
     const users=  await pool.query("SELECT * FROM users ")
      if(users.length==0){
        return res.status(200).json({
            "error":"no user found"
        })
      }
      return res.status(200).json(users)
 
    } catch (error) {
    console.error(error)
    return res.status(500).json("internal server error")
 }
}




export const updateUser= async(req,res,next)=>{
    const id=req.params.user_id
    const {role,email}=req.body
    try {
    const users= await pool.query("SELECT * FROM users WHERE user_id=$1",[id])
       if(users.rows.length==0){
        return res.status(404).json("user not found")
       } 
 
    const new_users= await pool.query("UPDATE users SET  user_email=$1 ,user_role=$2 WHERE user_id=$3 RETURNING *",[email,role,id]) 
    return  res.status(200).json({
        message:"updated Suceessfully"
    })   
} catch (error) {
       
        console.error(error)
    return res.status(500).json("internal server error")

    }    
}

export const getUser=async(req,res,next)=>{
    const {email}=req.body
    try{
        const users= await pool.query("SELECT * FROM users WHERE user_email=$1",[email])
        if(users.rows.length==0){
            return res.status(404).json("user not found")
        }
        return res.status(200).json(users.rows[0])
    }catch (error) {
       
        console.error(error)
    return res.status(500).json("internal server error")

    }   
}

export const deleteUser=async(req,res,next)=>{
    const email=req.params.user_email
    try{
        const users= await pool.query("SELECT * FROM users WHERE user_email=$1",[email])
        if(users.rows.length==0){
            return res.status(404).json("user not found")
           } 
           
        const delte_users= await pool.query("DELETE FROM users WHERE user_email=$1",[email])
        return  res.status(200).json({
            message:"deleted Suceessfully"
        }) 
    }catch (error) {
       
        console.error(error)
    return res.status(500).json("internal server error")

    } 


}