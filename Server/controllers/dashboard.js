import { Router as router } from "express";
import pool from "../db/db.js";
import auth from "../middleware/authorize.js";

const dashboard=async(req,res)=>{
 const {role}=req.body;

}

export default dashboard