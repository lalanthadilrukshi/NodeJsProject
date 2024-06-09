import http from 'http'
import fs from "fs/promises" 
import url from "url" // for file path
import path from "path" // for directory path

const __fileName =url.fileURLToPath(import.meta.url)
const __dirName = path.dirname(__fileName)
const PORT=process.env.PORT // you can use any number which has not been used already , as a port
const server = http.createServer( async (req,res) => { // async for await- file read 
   // res.setHeader('Content-Type', 'text/plain')
    //res.end("<h1>hello world by res.end<h1>") // in express you need not write this concluding command
   // console.log(req.url)
    //console.log(req.method)
    //res.writeHead(500,{'Content-Type': 'application/json'})
    //res.end(JSON.stringify({message:"testing jsontype", message2:"testing after nodemon install3"}))
try{
if (req.method === "GET") { 
let filepath

    if (req.url==="/"){
    filepath =path.join(__dirName ,"public","index.html" )
    }
    else if (req.url==="/about"){
    filepath =path.join(__dirName ,"public","about.html" )
    }
    else{
    throw new Error("Not Found")
    }
    const data= await fs.readFile(filepath)

 res.setHeader('Content-Type', 'text/html')
    res.end(data)
   
} else {
throw new Error("Method not allowed")
} 
} catch (error){
    res.writeHead(500,{'Content-Type': 'text/html'})
    res.end("<h1> server error</h1>" )   
}
})
server.listen(PORT, ()=>{
    console.log("Server running on port:" + PORT)
})