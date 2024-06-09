import http from 'http'
const users=[
    {id:1,name:"john Doe"}, {id:2,name:"john Doe2"}, {id:3,name:"john Doe3"}
]
const PORT=process.env.PORT // you can use any number which has not been used already , as a port
const server = http.createServer( async (req,res) => { // async for await- file read 
  
    try{
    if (req.method === "GET" && req.url==="/api/users") { 
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(users))
        res.statusCode=200
        res.end()
    } 
    else if (req.url.match(/\/api\/users\/([0-9]+)/)) { // sample url get - http://localhost:8080/api/users/2
        const id=req.url.split("/")[3]
        const user=users.find((user)=> user.id=== parseInt(id))
        if (user){
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(user))
        res.statusCode=200
        res.end()}
        else {
            throw new Error("not valid user") }       
    }
          
    else {
    throw new Error("Method not allowed") } 
    } catch (error){
    res.writeHead(500,{'Content-Type': 'text/html'})
    res.end("<h1> server2-2 error</h1>" )   
    }
})

server.listen(PORT, ()=>{
    console.log("Server2-2 running on port:" + PORT)
})