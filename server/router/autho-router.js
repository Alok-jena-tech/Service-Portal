const express=require("express");
const app=express();
const router=express.Router();
const {Home,Register,login,user}=require('../controllers/autho-controller')
const validate=require("../middlewares/validate-middleware");
const {signupSchema,loginSchema}=require("../validators/auth-validator");
const authoMiddleware = require("../middlewares/autho-middleware");
// router.get("/",Home)
router.route("/").get(Home)

router.route("/register").post(validate(signupSchema),Register)

router.route("/login").post(validate(loginSchema),login)
router.route("/user").get(authoMiddleware,user)

module.exports=router; 