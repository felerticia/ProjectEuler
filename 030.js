let sum = 0
for (let d = 2; d < 999_999; d++) {
    let digits = String(d).split('').map(Number)
    
    if (digits.reduce((acc,v) => acc + Math.pow(v,5), 0) === d)
        sum +=d
        
}

console.log(sum);