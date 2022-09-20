const http= require('http')
const server=http.createServer((req,res)=>{
     res.setHeader('Content-Type', 'text/html');
    res.write("<h1>hello word from Node!!!</h1>");
    res.end();
})
server.listen(3000,()=>{console.log("server started @localhost:3000")});