http = require("http")
fs = require("fs")
path = require('path');

http.createServer((q,s)=>{

     if(q.url.includes(path.join(__dirname, "egechat.js"))){
        s.writeHeader(200,{"Content-Type":"application/javascript"})
       fs.readFile(path.join(__dirname, "egechat.js"),(e,d)=>{
         s.end(d.toString())
       })
   }else{ 
 
  s.writeHeader(200,{"Content-Type":"text/html"})
 fs.readFile(path.join(__dirname, "index.html"),(e,d)=>{
   if(q.url.includes(process.env.url)){
     s.end(`Was too lazy to make a chatroom, so I made a <a href="${process.env.link}">discord server</a> instead lol`)
   }else{
   s.end("<h1>Schrodinger Equation:</h1>\n"+d.toString())
   }
 })
}
}).listen(1234)