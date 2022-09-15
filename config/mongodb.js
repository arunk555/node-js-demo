const mongoose = require("mongoose");
const {MONGO_URI}=process.env;
/*const connectdb=()=>{
    mongoose.connect(MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("Successfully connected to database");
    }).catch((error)=>{
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
    });
};*/
const connectdb=async ()=>{
    try{
        await mongoose.connect(MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log("Successfully connected to database");
    }catch(error){ 
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
    }
}

module.exports={connectdb};