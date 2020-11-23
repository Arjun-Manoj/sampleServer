const http = require("http");
const dateTime = require("./dateModule");
const fs = require("fs");

http.createServer((req,res)=>{
    // res.writeHead(200, {"Content-type": "text/plain"});
    // res.end("Hello World. Right now it is " + dateTime.dateTime() +  req.url);
    fs.readFile("index.html", (err, data)=>{
        res.writeHead(200, {"Content-type": "text/html"});
        res.write(data);
        return res.end();
    });
}).listen(5000);