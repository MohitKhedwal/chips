import { Router as router } from "express";
import pool from "../db/db.js";
import bcrypt from "bcrypt"
import token from "../utility/tokenGenerator.js";
import { json } from "express";

const verify=async(req,res,next)=>{
    try {
        res.json(true)
    } catch (error) {
        res.status(500).json("server error") 
    }
}

export default verify;