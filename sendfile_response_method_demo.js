const express = require('express')
const app=express();
app.get('/login',(req,res)=>{console.log("abc");
                                    res.sendFile(__dirname+'/demo.html')})

app.listen(3000,()=>{console.log("server started @localhost:3000")});