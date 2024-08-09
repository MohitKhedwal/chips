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



export {
    roleFetch,
    deptFetch
}