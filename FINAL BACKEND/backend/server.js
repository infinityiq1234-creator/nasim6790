const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const connectdb=require("./config/db");
dotenv.config();
connectdb();

const app=express();
app.use(cors( ));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("api is working");
})
app.use('/api/content',require('./routes/courseRoutes'))
const port=process.env.PORT || 7867
app.listen(port,()=>{
    console.log("server is running port 7867");
})