import pool from "../db/db.js"


const roleAuth=async(req,res,next)=>{

    // get the values 
    // query to get role of email
    // get the role
    // return the role

    try {
        const {email,password}=req.body
        const resultRole =await pool.query("SELECT user_role FROM users WHERE user_email=$1 ",[email])
        if(resultRole.rows.length===0){
            return res.status(400).json({msg:"User not found"})
        }
        
        // const rolePermission
        req.body.role=resultRole.rows[0].role
        console.log(req.body.role)
        // console.log(req.body)
        // const role=req.body.role
        next()
        // return req.body.role

        // return res.status(200).json(role)
 
        // next()
        // return res.json({rolePermission,msg:"logged in"})
    
      
    } catch (error) {
        // console.log(error)
        return res.status(500).json({
            msg:"server erro0r"
        })
    }
}

export default roleAuth