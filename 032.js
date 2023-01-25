const hasProduct = n => {
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0){
            temp = 
                (String(n) + String(i) + String(Math.floor(n/i)))
                .split("")
                .sort()
                .join('')
            if (i === 38 || i === 39)
                console.log(n,i,temp);
            if (temp === '123456789')
                return true
        }
    }
    return false
}

let sum = 0
for (let i = 1; i < 10_000; i++) {
    if(hasProduct(i))
        sum+=i
}

console.log(sum);