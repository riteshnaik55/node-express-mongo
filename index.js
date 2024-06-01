const express= require('express');
const mongoose=require('mongoose');
const bodyParse=require('body-parser');
const dotenv=require('dotenv');
dotenv.config({ path: './.env' });

const app=express();
app.set('view engine','ejs');

try{
    mongoose.connect(process.env.MONGO_URI);
    console.log('DB connection success');
}catch(error){
    console.log('MongoDB connection failed!');
}

app.get('/', (req,res)=>{
    res.send("Hello world!!");
})


app.listen(1337, ()=>{
    console.log('Server running on localhost:1337');
}).on('error',console.log);