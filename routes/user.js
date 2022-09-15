const express = require("express");
const router = express.Router();

const {welcome, signup}=require("../controllers/user");
router.get("/welcome",welcome);
router.post("/signup",signup);

module.exports=router;
