const User=require('../model/user');
const welcome=(req,res)=>{
    res.status(200).send("welcome to node js demo");
}

const registerctrl=(req, res) => {
  try {
    // Get user input
    const { name, email, password } = req.body;
    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // check if user already exist
    // Create user in our database
    const userdata = {
      name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    };
    res.status(201).json(userdata);
  } catch (err) {
    console.log(err);
  }
};
module.exports={welcome, signup};