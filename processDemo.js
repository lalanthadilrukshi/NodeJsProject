//need not import process as it is global

console.log(process.argv)
console.log(process.argv[3])
//console.log(process.env)
console.log(process.pid)
console.log(process.cwd())
console.log(process.memoryUsage())

process.on("exit", (code)=> {
    console.log(`about to exit with code : ${code}`)
})
//any commands after process.exit will not be executed
process.exit(0)
console.log("hello after exit")



