const express = require('express')
const app=express();
app.get('/student/:id/:name',(req,res)=>{console.log(req.params);
                                    res.send("hello Node")})

app.listen(3000,()=>{console.log("server started @localhost:3000")});