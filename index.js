
const fs = require("fs");
fs.readFile("a.txt" , "utf-8" , function(err , data){
    console.log(data);
})
const express = require("express");
const app = express()

//route handler
app.get('/' , function(req , res){
    res.send("hello world")
})
app.post('/' , function(req , res){
    res.send("hello world by post")
})
app.get('/asd' , function(req , res){
    res.send("hello world by asd")
})
app.listen(3000)