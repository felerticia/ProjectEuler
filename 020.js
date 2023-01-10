let a = BigInt(1)

for (let i = 1; i <= 100; i++) {
    a *= BigInt(i)
}

const s = 
    String(a)
    .split('')
    .map(Number)
    .reduce((acc,v) => acc + v , 0)

console.log(s);