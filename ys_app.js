const express=require('express');
const session = require("express-session");
const bodyParser=require('body-parser');
var visitor=require("./routes/visitor.js");
var app=express();

var server = app.listen(1225,(req,res)=>console.log("服务器已经成功启动，端口号为1225!"));
app.use(express.static("static"));
app.use(bodyParser.urlencoded({extended:false}));
// app.use(session({
//     secret:'随机字符串',
//     cookie:{maxAge:60*1000*30},//过期时间ms
//     resave:false,
//     saveUninitialized:true
//   }));
app.use(express.static('yansy'));
app.use("/visitor",visitor);
