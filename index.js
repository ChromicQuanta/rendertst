http = require("http")
fs = require("fs")

http.createServer((q,s)=>{
  s.writeHeader(200,{"Content-Type":"text/html"})
 fs.readFile("index.html",(e,d)=>{
   if(q.url.includes(process.env.url)){
     s.end(`Was too lazy to make a chatroom, so I made a <a href="${process.env.link}">discord server</a> instead lol`)
   }else{
   s.end("<h1>Schrodinger Equation:</h1>\n"+d.toString())
   }
 })
}).listen(1234)
