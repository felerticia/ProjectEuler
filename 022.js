const fs = require('fs')

const getValue = name => {
    let sum =0
    for (let i = 0; i < name.length; i++) {
       sum += name[i].charCodeAt(0) - 64
    }
    return sum
}


fs.readFile('./p022.txt','utf-8', (err,data)=> {
    const list =
        data
        .split(',')
        .map(x => x.slice(1,-1))
        .sort((a,b) => a < b ? -1 : 1)

    const s = list.reduce ((acc,name,i) => acc + getValue(name) * (i+1),0)

    console.log(s);
})