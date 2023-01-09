const num = String(BigInt(Math.pow(2,1000)))

const res = 
    num
    .split('')
    .reduce((acc,v) => acc + Number(v), 0)

console.log(res);