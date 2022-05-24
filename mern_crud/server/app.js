require("dotenv").config();
const express= require("express")
const app = express();
const mongoose = require("mongoose");
const path = require("path");

require("./db/conn");

const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");

app.set("port", process.env.PORT || 8003);
console.log("+++++++++++++++++++++++" + app.get("port"));

app.use(cors());
app.use(express.json());
app.use(router);
app.use(express.static('../build'));

app.listen(process.env.PORT || 8003,()=>{
    console.log(`server is start port ${process.env.PORT || 8003}`);
})

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

