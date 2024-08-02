const valid=async(req,res,next)=>{
     const{email,password}=req.body

     function validEmail(usermail){
        return ( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(usermail));
     }
     
     if (req.path === "/register") {
        if (![email,  password].every(Boolean)) {
          return res.status(401).json("Missing Credentials");
        } else if (!validEmail(email)) {
          return res.status(401).json("Invalid Email");
        }
      } else if (req.path === "/login") {
        if (![email, password].every(Boolean)) {
          return res.status(401).json("Missing Credentials");
        } else if (!validEmail(email)) {
          return res.status(401).json("Invalid Email");
        }
      }
    
     next();
    }

    export default valid;