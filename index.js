require('dotenv').config();
const mongoose = require('mongoose');
const express =require('express');
const app=express();

require('./Models/db');
const BodyParser=require('body-parser');
const AuthRouters=require('./Routs/AuthRouter');
const  cors=require('cors');
const PORT =process.env.PORT || 8080;


app.get('/ping',(req,res)=>{
    console.log("hey there is deepak");
})
app.use(BodyParser.json())
app.use(cors())
app.use('/auth',AuthRouters)

app.listen(PORT,()=>{
    console.log("server is running")
})