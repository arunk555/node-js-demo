const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../model/user');

const welcome=(req,res)=>{
    res.status(200).send("welcome to node js demo");
}

const registerctrl=async(req, res) => {
  try {
    // Get user input
    const { name, email, password, street, city } = req.body;
    // Validate user input
    if (!(email && password)) {
      res.status(400).json({
        success: "false",
        error: {
          statusCode: 400,
          message: "All input is required"
        }
      });
    }
    // check if user already exist
    const olduser = await User.findOne({email});
    if(olduser){
      res.status(409).json({
        success: "false",
        error: {
          statusCode: 409,
          message: "User Already Exist. Please Login"
        }
      });
    }

    const encryptedPassword=await bcryptjs.hash(password,10);
    // Create user in our database
    const userdata = {
      name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
      address: {street, city}
    };
    // Create user in our database
    const user = await User.create(userdata);
    //create tokens
    const token=jwt.sign({user_id:user._id, email:user.email},process.env.TOKEN_KEY,{expiresIn:"2h"});
    const reftoken=jwt.sign({user_id:user._id, email:user.email},process.env.TOKEN_KEY);
    if(token && reftoken){
      user.token=token;
      user.refresh_token=reftoken;
      user.save();
    }
    res.status(201).json(user);
  } catch (error) {
    console.log(err);
    res.status(400).json({
      success: "false",
      message: error
    });
  }
};

const loginctrl=async(req,res)=>{
  try{
   const {email, password}=req.body;
   if (!(email && password)) {
      res.status(400).json({
        success: "false",
        error: {
          statusCode: 400,
          message: "All input is required"
        }
      });
   }

   const user = await User.findOne({email});
   if(user && (await bcryptjs.compare(password,user.password))){
    const token=jwt.sign({user_id:user._id, email},process.env.TOKEN_KEY, {expiresIn:'2h'});
    user.token=token;
    if(user.token) user.save();
    res.status(201).json(user);
   }else{
    res.status(400).json({
      success: "false",
      error: {
        statusCode: 400,
        message: "Invalid Credentials"
      }
    });
   }
  }catch(error){
    res.status(400).json({
      success: "false",
      message: error
    });
  }
}



module.exports={welcome, registerctrl, loginctrl};