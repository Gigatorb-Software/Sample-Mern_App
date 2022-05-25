require("dotenv").config();
const express= require("express")
const app = express();
const mongoose = require("mongoose");
const path = require("path");

require("./db/conn");

const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");

const port= process.env.PORT || 8003;


app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.json("server start")
})
app.use(router);
//app.use(express.static('.mern_crud/build'));

app.listen(port ,()=>{
    console.log(`server is start port ${port}`);
});


