const mongoose = require("mongoose");

const DB = "mongodb+srv://mern-user:giga-password@cluster0.9hudl.mongodb.net/comments?retryWrites=true&w=majority"


mongoose.connect(DB,{
  
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("connection start")).catch((error)=>console.log(error.message));