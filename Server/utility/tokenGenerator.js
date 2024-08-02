// import {jwt} from "jsonwebtoken"
import { configDotenv } from "dotenv"
import jwt from "jsonwebtoken"

configDotenv({
    path:"./.env"
})

const token=(user_id)=>{
    const payload={
        user:{
            id:user_id
        }
    }
    return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRY})
}

export default token;