const fs = require('fs')

const isTriangle = str => {
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        sum += str[i].charCodeAt(0) - 64
    }
    
    let n = (Math.sqrt(8 * sum + 1) - 1) / 2
    return (n === Math.floor(n))

}


fs.readFile('./p042.txt','utf-8', (err,data) => {
    const count = 
        data
        .split(',')
        .map(x => x.slice(1,-1))
        .filter(isTriangle)
        .length

    console.log(count);
})