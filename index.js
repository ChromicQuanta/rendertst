http = require("http")
fs = require("fs")

http.createServer((q,s)=>{
  s.writeHeader(200,{"Content-Type":"text/html"})
 fs.readFile("index.html",(e,d)=>{
   s.writeHeader(200,{"Content-Type":"text/html"})
   s.end(d.toString())
 })
}).listen(1234)
