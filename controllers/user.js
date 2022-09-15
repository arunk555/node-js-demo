const User=require('../model/user');
const welcome=(req,res)=>{
    res.status(200).send("welcome to node js demo");
}

const signup=(req,res)=>{
  const {name, email, password, street, city}=req.body;
  console.log(req.body);
 // Validate user input
 if (!(email && password)) {

  res.status(400).json(req);
  }


}

module.exports={welcome, signup};