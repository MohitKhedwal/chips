// import pool from "../db/db.js"

// export const readUser=async(req,res,next)=>{
// // used to 
//     try {
//      const result=  await pool.query("SELECT * FROM users ")

//       if(result.length==0){
//         return res.status(200).json({
//             "error":"no user found"
//         })
//       }
//       const users=result.rows.map(u=>[u.user_id,u.user_email,u.user_password,u.user_role,u.user_dept,u.user_name]);
//       console.log(users);
//       return res.status(500).json(users)
     
 
//     } catch (error) {
//     console.error(error)
//     return res.status(500).json("internal server error")
//  }
// }




// export const updateUser= async(req,res,next)=>{
//     const id=req.params.user_id
//     const {role,email}=req.body
//     try {
//     const users= await pool.query("SELECT * FROM users WHERE user_id=$1",[id])
//        if(users.rows.length==0){
//         return res.status(404).json("user not found")
//        } 
 
//     const new_users= await pool.query("UPDATE users SET  user_email=$1 ,user_role=$2 WHERE user_id=$3 RETURNING *",[email,role,id]) 
//     return  res.status(200).json({
//         message:"updated Suceessfully"
//     })   
// } catch (error) {
       
//         console.error(error)
//     return res.status(500).json("internal server error")

//     }    
// }

// export const getUser=async(req,res,next)=>{
//     const {email}=req.body
//     try{
//         const users= await pool.query("SELECT * FROM users WHERE user_email=$1",[email])
//         if(users.rows.length==0){
//             return res.status(404).json("user not found")
//         }
//         return res.status(200).json(users.rows[0])
//     }catch (error) {
       
//         console.error(error)
//     return res.status(500).json("internal server error")

//     }   
// }

// export const deleteUser=async(req,res,next)=>{
//     const email=req.params.user_email
//     try{
//         const users= await pool.query("SELECT * FROM users WHERE user_email=$1",[email])
//         if(users.rows.length==0){
//             return res.status(404).json("user not found")
//            } 
           
//         const delte_users= await pool.query("DELETE FROM users WHERE user_email=$1",[email])
//         return  res.status(200).json({
//             message:"deleted Suceessfully"
//         }) 
//     }catch (error) {
       
//         console.error(error)
//     return res.status(500).json("internal server error")

//     } 


// }

import pool from "../db/db.js"

// export const readUser=async(req,res,next)=>{
// // used to 
//     try {
//      const result=  await pool.query("SELECT * FROM users ")

//       if(result.length==0){
//         return res.status(200).json({
//             "error":"no user found"
//         })
//       }
//       const users=result.rows.map(u=>[u.user_id,u.user_email,u.user_password,u.user_role,u.user_dept,u.user_name]);
//       console.log(users);
//       return res.status(500).json(users)
     
 
//     } catch (error) {
//     console.error(error)
//     return res.status(500).json("internal server error")
//  }
// }


export const readUser = async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM users");

        if (result.rows.length === 0) {
            return res.status(200).json({
                "error": "no user found"
            });
        }

        const users = result.rows.map(u => ({
            user_id: u.user_id,
            user_email: u.user_email,
            user_password: u.user_password,
            user_role: u.user_role,
            user_dept: u.user_dept,
            user_name: u.user_name
        }));

        console.log(users);
        return res.status(200).json(users); // Changed status code to 200
    } catch (error) {
        console.error(error);
        return res.status(500).json("internal server error");
    }
}

// export const updateUser= async(req,res,next)=>{
//     const id=req.params.user_id
//     const {role,email}=req.body
//     try {
//     const users= await pool.query("SELECT * FROM users WHERE user_id=$1",[id])
//        if(users.rows.length==0){
//         return res.status(404).json("user not found")
//        } 
 
//     const new_users= await pool.query("UPDATE users SET  user_email=$1 ,user_role=$2 WHERE user_id=$3 RETURNING *",[email,role,id]) 
//     return  res.status(200).json({
//         message:"updated Suceessfully"
//     })   
// } catch (error) {
       
//         console.error(error)
//     return res.status(500).json("internal server error")

//     }    
// }
export const updateUser = async (req, res, next) => {
    const { user_id } = req.params;
    const { user_name, user_email, user_password, user_role, user_dept } = req.body;

    try {
        // Check if the user exists
        const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [user_id]);
        if (user.rows.length === 0) {
            return res.status(404).json("User not found");
        }

        // Update the user details
        await pool.query(
            "UPDATE users SET user_name = $1, user_email = $2, user_password = $3, user_role = $4, user_dept = $5 WHERE user_id = $6",
            [user_name, user_email, user_password, user_role, user_dept, user_id]
        );

        return res.status(200).json({
            message: "User updated successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json("Internal server error");
    }
};


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

// export const deleteUser=async(req,res,next)=>{
//     const email=req.params.user_email
//     try{
//         const users= await pool.query("SELECT * FROM users WHERE user_email=$1",[email])
//         if(users.rows.length==0){
//             return res.status(404).json("user not found")
//            } 
           
//         const delte_users= await pool.query("DELETE FROM users WHERE user_email=$1",[email])
//         return  res.status(200).json({
//             message:"deleted Suceessfully"
//         }) 
//     }catch (error) {
       
//         console.error(error)
//     return res.status(500).json("internal server error")

//     } 


// }

export const deleteUser = async (req, res, next) => {
    const userId = req.params.user_id; // Fetch the user ID from the request parameters
    try {
        // Check if the user exists
        const users = await pool.query("SELECT * FROM users WHERE user_id = $1", [userId]);
        if (users.rows.length === 0) {
            return res.status(404).json("User not found");
        }

        // Delete the user
        await pool.query("DELETE FROM users WHERE user_id = $1", [userId]);
        return res.status(200).json({
            message: "Deleted successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json("Internal server error");
    }
};