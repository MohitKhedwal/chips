import jwt from "jsonwebtoken"
import { configDotenv } from "dotenv"

configDotenv({
    path:"./.env"
})

const auth=async(req,res,next)=>{

    const token=req.header("jwt_token")
 
    if(!token){
        return res.status(403).json({msg:"Not Allowed"})
    }
   try {
    
     const verify=jwt.verify(token,process.env.JWT_SECRET)
     req.user=verify.user
     next()
   } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
   }
}

export default auth