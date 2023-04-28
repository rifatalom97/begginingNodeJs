const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req,res)=>{
    const filePath = path.join(__dirname,'public','index.html');

    fs.readFile(filePath, (error,data)=>{
        if(error){
            if(error.code==='ENOENT'){
                res.writeHead(404,{"Content-Type":"text/html"});
                res.end('<h2>Not found</h2>');
            }else{
                res.writeHead(500,{"Content-Type":"text/html"});
                res.end('<h2>Bad request</h2>');
            }
        }else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(data);
        }
    });
}).listen(3000,()=>{
    console.log('Server started');
});