const http=require('http');

const server=http.createServer((req,res)=>
{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end("Server chal rha h");
})

server.listen(9000,()=>{
    console.log("server chal rha h");
})
