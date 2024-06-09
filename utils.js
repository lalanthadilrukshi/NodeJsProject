function generateRandomNumber(){
    return Math.floor(Math.random()*100) +1;
}

function addAndMultiply(num){
    return ( (num + num) * num )
}
//module.exports = generateRandomNumber // to be able to import in other files

module.exports = { generateRandomNumber,addAndMultiply}  // to be able to import in other files

