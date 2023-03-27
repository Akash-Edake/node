const http = require('http')
const fs = require("fs")

const server = http.createServer((req,res)=>{
    if(req.url=='/'){

        res.end("This is home page")
    }else if(req.url=='/download'){
        res.end("This is Download page")
    }else if(req.url=='/users'){
        res.end(fs.readFileSync("./apiData.json","utf-8"))
    }else{
        res.end("404: page Not Found")
    }
})

server.listen(5000,()=>{
    console.log("server is working on 5000 port")
})