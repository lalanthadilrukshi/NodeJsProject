import path from "path"
import url from "url"

const filePath="./dir1/dir2/test2.txt"
console.log(path.basename(filePath))
console.log(path.dirname(filePath))
console.log(path.extname(filePath))
console.log(path.parse(filePath))

const _urlToPath= url.fileURLToPath(import.meta.url)
const _dirname= path.dirname(_urlToPath)
console.log(_urlToPath, "    ",  _dirname)
const filePath2=path.join(_dirname,"dir3", "dir4", "test.txt")
console.log(filePath2)
const filePath3=path.resolve(_dirname, "dir5", "dir6", "text.txt")
console.log(filePath3)
