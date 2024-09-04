 

const mongoose  = require('mongoose');
 
 const connectDB =()=>{
    mongoose.connect("mongodb+srv://Alima:dLL47HbWv9TT3e2I@cluster0.ldpzdj8.mongodb.net/")
    .then(()=>{
        console.log("Connected to the Mongoose");
        
    }).catch(()=>{
        console.log("Error");
        
    })
 }

 module.exports = connectDB;

