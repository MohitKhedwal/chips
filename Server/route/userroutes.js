import { Router } from "express";
import valid from "../middleware/validInfo.js";
import registerUser from "../controllers/registerUser.js";
import loginUser from "../controllers/loginUser.js";
import auth from "../middleware/authorize.js";
import verify from "../middleware/verify.js";
// import dashboard from "../controllers/dashboard.js";
import roleAuth from "../middleware/role.js";
import { deleteUser, readUser, updateUser,getUser } from "../controllers/CRUD.js";
import {forgotpassword,resetpassword,roleFetch,deptFetch, getrole, getname, getdept, getemail} from "../controllers/fetch.js"


const router =Router();

router.route("/register").post(valid,registerUser)

router.route("/login").post(valid,loginUser)

// router.route("/verify").post(auth,roleAuth,verify)

router.route("/role").get(valid,roleAuth)

// router.route("/dashboard").post(auth,dashboard)


// read
router.route("/read").get(readUser)
router.route("/getuser").get(getUser)

//update
router.route("/update/:user_id").put(updateUser)

// delete
router.route("/delete/:user_id").delete(deleteUser)

router.route("/forgot-password").post(forgotpassword)

router.route("/reset-password/:user_id/:token").post(resetpassword)

router.route("/role-fetch").get(roleFetch)

router.route("/dept-fetch").get(deptFetch)

// user details
router.route("/get-role").post(getrole)
router.route("/get-name").post(getname)
router.route("/get-dept").post(getdept)
router.route("/get-email").post(getemail)
export default router
