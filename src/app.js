var express = require('express');
// const { createConn } = require('./conection');
// const { default: db } = require('./conection');
const serverless = require("serverless-http");
const mongodb = require('./conection');
const QuestionModel = require('./modal');
var app = express();
var cors = require('cors');
app.use(express.json()); 
app.use(cors()); 
mongodb.connect();

app.get('/question',async (req,res)=>{
    try{
        const Data = await QuestionModel.find();
        res.status(200).json(Data);
    }
    catch(err){
        console.log(err);
    }
});

app.post('/question',async (req,res)=>{
    try{
        const Data = await QuestionModel.create(req.body);
        res.status(201).json(Data);
    }
    catch(err){
        console.log(err);
    }
});


//Server Running at 8000 port
module.exports = app;
module.exports.handler = serverless(app);
