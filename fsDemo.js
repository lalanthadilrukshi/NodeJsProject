//import fs from "fs";
// // readfil() - with asynchronous call back function, which will run after the - 
// // file is read
// fs.readFile("./test.txt","utf8", (err,data)=> {
   // if (err) throw err;
    // console.log(data)

//})

// //readFileSync -Synchronous version. good to read small files. if its a giant file, its going to block the rest of the code.
// const data = fs.readFileSync("./test.txt","utf8")
//console.log(data)
import fs from "fs/promises"

// fs.readFile("./test.txt", "utf8")
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

//readFile() - async/await
const readFile = async () => {
    try {
        const data=await fs.readFile("./test.txt","utf8")
        console.log(data)
         } catch (error){
        console.log(error)
         }
    }
    const writeFile = async () => {
    try{
        await fs.writeFile("./test.txt", "wrote to file")
    } catch (error) {
        console.log(error)
    }
    }

    const appendFile = async () => {
        try{
            await fs.appendFile("./test.txt", "appended to file")
        } catch (error) {
            console.log(error)
        }
        }

    writeFile()
    appendFile()
    readFile()
    