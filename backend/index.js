const express = require("express");
const connectDb = require("./connect");
const home = require("./routes/home");
const port = 3000;
const app = express()

//Middlewares
app.use(express.json())

//External Routes
app.use("/", home);

//Database Connection 
connectDb("mongodb://localhost:27017/result").then(()=>{
    console.log("DB Connected")
})


app.listen(port, ()=>{
    console.log("Server Started at http://localhost:"+port);
})