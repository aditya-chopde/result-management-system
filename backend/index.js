const express = require("express");
const connectDb = require("./connect");
const home = require("./routes/home");
const create = require("./routes/create");
const result = require("./routes/result")
const cors = require("cors")
const port = 3000;
const app = express()
require("dotenv").config()

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//External Routes
app.use("/", home);
app.use("/create", create)
app.use('/result', result)

//Database Connection 
connectDb(process.env.MONGO_URL).then(()=>{
    console.log("DB Connected")
}).catch((error)=>{
    console.log("Error Occurred: " + error.message)
})


app.listen(port, ()=>{
    console.log("Server Started at http://localhost:"+port);
})