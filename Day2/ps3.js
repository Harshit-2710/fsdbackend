const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end("server firse chal rha h");
});

server.listen(9000,()=>{
    console.log("Server firse aur chal rha h");
});