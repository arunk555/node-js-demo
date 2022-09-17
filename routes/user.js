const express = require("express");
const router = express.Router();
const verifytoken =require("../middleware/auth");

const {welcome, registerctrl,loginctrl}=require("../controllers/user");
router.get("/welcome",verifytoken, welcome);
router.post("/signup",registerctrl);
router.post("/login",loginctrl);

module.exports=router;
