const jwt=require("jsonwebtoken");
const verifytoken=(req,res,next)=>{
  const token=(req.headers['authorization'])?req.headers['authorization'].split(" ")[1]:"";
  if(!token) {
    res.status(403).json({
        success: "false",
        error: {
            statusCode: 403,
            message: "Access token is missing or invalid"
        }
    });
  }
  try{
    const decoded= jwt.verify(token,process.env.TOKEN_KEY);
    req.user=decoded;
  }catch(error){
    res.status(400).json({
        success: "false",
        error: {
            statusCode: 400,
            message: "Access token is invalid"
        }
    });
  }
  return next();

}

module.exports=verifytoken;


