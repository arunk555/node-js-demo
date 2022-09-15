const express = require("express");
const router = express.Router();

const {welcome, registerctrl}=require("../controllers/user");
router.get("/welcome",welcome);
router.post("/signup",registerctrl);

module.exports=router;
