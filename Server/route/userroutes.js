import { Router } from "express";
import valid from "../middleware/validInfo.js";
import registerUser from "../controllers/registerUser.js";
import loginUser from "../controllers/loginUser.js";
import auth from "../middleware/authorize.js";
import verify from "../middleware/verify.js";
import dashboard from "../controllers/dashboard.js";
import roleAuth from "../middleware/role.js";
import { deleteUser, readUser, updateUser,getUser } from "../controllers/CRUD.js";
import forgotpassword from "../controllers/forgotpassword.js";
import resetpassword from "../controllers/resetpassword.js";
import { roleFetch } from "../controllers/usercontroller.js";

const router =Router();

router.route("/register").post(valid,registerUser)

router.route("/login").post(valid,loginUser)

// router.route("/verify").post(auth,roleAuth,verify)

router.route("/role").get(valid,roleAuth)

router.route("/dashboard").post(auth,dashboard)


// read
router.route("/read").get(readUser)
router.route("/getuser").get(getUser)

//update
router.route("/update/:user_id").put(updateUser)

// delete
router.route("/delete/:user_email").delete(deleteUser)

router.route("/forgot-password").post(forgotpassword)

router.route("/reset-password/:user_id/:token").post(resetpassword)

router.route("/role-fetch").get(roleFetch)
export default router
