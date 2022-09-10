const express=require("express");
const user_routes = require("./routes/user");
const app=express();

app.use(express.json({ limit: "50mb" }));

app.use("/",user_routes);


// This should be the last route else any after it won't work
app.use("*", (req, res) => {
    res.status(404).json({
      success: "false",
      message: "Page not found",
      error: {
        statusCode: 404,
        message: "You reached a route that is not defined on this server",
      },
    });
});
module.exports=app;