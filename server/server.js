const express = require('express');//back-end web-framework
const mongoose = require('mongoose'); 
const colors =require('colors')
const dotenv = require('dotenv').config()//allows to use dotenv
const connectDB = require('./config/connectDB')
const port = process.env.PORT || 5000 
const cors = require("cors");//added recently to help the backend connect to the front-end
const app = express();
app.use(express.json({limit: "30mb",extended:true}));
app.use(express.urlencoded({limit: "30mb",extended:true}));
app.use(cors())

connectDB()//conncts our atlis cluster

//allows us to connect our middleware to our items.js file
const itemRoutes = require('./routes/routes')
app.use('/items',itemRoutes)
app.get('/',(req,res)=>{
res.send('Hello')
})

//port listener
app.listen(port,()=>{
    console.log(`Our server port ${port} is running!!!!`)
})