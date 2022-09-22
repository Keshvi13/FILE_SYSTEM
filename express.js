const express = require('express')
const app=express();
app.get('/',(req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.send("<h1>home page hello</h1>")})

app.get('/about',(req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.send("<h2>about page</h2>")})    

 app.get('/contact',(req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.send("<h3>contact page</h3>")})

app.delete('/delete',(req,res)=>{
    res.send("delete page");
})   

//path based on string patterns:

// 1)/ab?cd = abcd or acd
// 2)/ab+cd = abcd or abb...cd
// 3)/ab*cd = ab RANDOM cd
// 4)/ab(cd)?e = abcde or abe
// app.get('/ab?cd',(req,res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     res.send("<h4>path based on string patterns</h4>")})

//regular expression:

// 1)/a/
app.get(/a/,(req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.send("<h2>regular expression</h2>")})


 app.all('/',(req,res,next)=>{res.send("hiii");
                               next();})


//one route multiple handler::
app.get('/',(req,res,next)=>{console.log("hii");
                              next();},
             (req,res)=>{res.send("hello")}
)

app.listen(3000,()=>{console.log("server started @localhost:3000")});