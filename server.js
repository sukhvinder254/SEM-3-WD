const http = require("http");
const server=http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers)
    if(req.url=="/" && req.method=="GET") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Welcome to Home Page</h1>");
        res.end();

    }else if(req.url=="/about" && req.method=="GET"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Welcome to About Page</h1>");
        res.end();
    }else if(req.url=="/contact" && req.method=="GET"){
        res.write("<h1>Welcome to Contact Page</h1>")
    }
    res.end("hello from http")
})
server.listen(3000, () => {
    console.log("server is running on port 3000");
});

