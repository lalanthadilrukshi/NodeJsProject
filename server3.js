import http from 'http'
const users=[
{id:1,name:"john Doe"}, {id:2,name:"john Doe2"}, {id:3,name:"john Doe3"}
]
const PORT=process.env.PORT // you can use any number which has not been used already , as a port
const logger =(req, res, next) =>{
    console.log(`${req.method} ${req.url}`)
    next()
}

const jsonMiddleware = (req,res, next) => {
    res.setHeader("Content-Type", "application/json")
    next()
}

const getUsersHandler =(req,res) =>{
    res.write(JSON.stringify(users))
    res.statusCode=200
    res.end()  
}

const getUserByIdHandler= (req,res)=> {
    const id=req.url.split("/")[3]
    const user=users.find((user)=> user.id=== parseInt(id))
    if (user){
    res.write(JSON.stringify(user))
    res.statusCode=200
    res.end()}
    else {
        throw new Error("not valid user") }  
}

const notFoundHandler = (req,res) => {
    res.write(JSON.stringify({message:"Route not found"}))
    res.statusCode=404
    res.end() }

const createNewUserHandler = (req,res)=>{
    let body ="";
    //listen for data
    req.on("data",(chunk)=>{
         body += chunk.toString();})
         
    req.on("end",()=>{
        console.log("new user created: "  )
        const newUser=JSON.parse(body)
        newUser["id"]=users.length + 1
        users.push(newUser)
       res.write(JSON.stringify(newUser))
        res.statusCode=201
        res.end()
        console.log("new user created: "  + JSON.stringify(newUser)) })  }
 
const server = http.createServer( async (req,res) => { // async for await- file read 
logger(req,res, () => {
    jsonMiddleware(req,res,()=>{
        try{
            if (req.method === "GET" && req.url==="/api/users") { 
                getUsersHandler(req,res)
            } else if (req.method === "GET" && req.url.match(/\/api\/users\/([0-9]+)/)) {//sample url get- http://localhost:8080/api/users/2
                getUserByIdHandler(req,res)
            }

            else if (req.method === "POST" && req.url==="/api/users") { 
                createNewUserHandler(req,res)
            }

            else {
                notFoundHandler(req,res)
            }          } 
        catch (error){
            res.writeHead(500,{'Content-Type': 'text/html'})
            res.end("<h1> server3 error</h1>" )   
        }     })      })     })

server.listen(PORT, ()=>{
    console.log("Server2-2 running on port:" + PORT)  })