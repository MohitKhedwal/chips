import pool from "../db/db.js"

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
export {
    roleFetch
}