import url, { URLSearchParams } from "url";
const urlString ="https://www.google.com/search?q=hellow+world"

const urlObject = new URL(urlString);
console.log(urlObject)
console.log(url.format(urlObject))
console.log(import.meta.url)

console.log(urlObject.search)
const parameters = new URLSearchParams(urlObject.search)
console.log(parameters)
console.log(parameters.get("q"))

parameters.append("limit", "5")
console.log(parameters)
parameters.delete("limit")
console.log(parameters)
