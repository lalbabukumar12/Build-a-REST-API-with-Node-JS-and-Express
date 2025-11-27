import express from 'express';
//const express= require('express'); //same as above line
import bodyParser from 'body-parser';
//const bodyParser = require('body-parser'); //same as above line
import userRoutes from './routes/users.js';
//const userRoutes = require('./routes/users'); //same as above line
const app=express();
const PORT=5000;

app.use(bodyParser.json());

app.use('/users', userRoutes);


app.get('/',(req,res)=>{
      // console.log('[TEST]');
      res.send("Hello from HomePage");
});

app.listen(PORT,()=>{
    console.log(`Server is runnng on http://localhost:${PORT}`); 
});
