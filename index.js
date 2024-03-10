http = require("http")
http.createServer((q,s)=>{
  s.writeHeader(200,{"Content-Type":"text/html"})
  s.end("<h1>Isondrite</h1>")
}).listen(1234)
