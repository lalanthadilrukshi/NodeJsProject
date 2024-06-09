import {EventEmitter} from "events"

const myEmitter = new EventEmitter()


function greetHandler (name) {
    console.log("hello world "  + name)
}

function goodbyeHandler(name){
    console.log("goodbye world " + name)
}

myEmitter.on("greet", greetHandler)
myEmitter.on("goodbye", goodbyeHandler)

myEmitter.emit("greet", "john")
myEmitter.emit("goodbye", "john")

myEmitter.on("error", (err)=> {
    console.log("An error occured: ", err)
})
//simulate error
myEmitter.emit("error", new Error("Something went wrong"))





/*
function greetHandler () {
    console.log("hello world")
}

function goodbyeHandler(){
    console.log("goodbye world")
}

myEmitter.on("greet", greetHandler)
myEmitter.on("goodbye", goodbyeHandler)

myEmitter.emit("greet")
myEmitter.emit("goodbye")
*/