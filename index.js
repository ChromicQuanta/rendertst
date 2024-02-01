http = require("http")
http.createServer((q,s)=>{
  s.end("E")
}).listen(1234)
