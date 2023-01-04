//index     1   2   3   4   5   6   7   8   9   10
//number    2   3   5   7   11  13  17  19  23  29

let index = 4
let prime = 7

const isPrime = x => {
    if (x <= 3)
        return true
    if (x % 2 === 0)
		return false

    for (let i = 3; i<= Math.sqrt(x); i+=2){
        if (x % i === 0)
            return false
    }
    return true
}

let ones = [1,3,7,9]
let tens = 10
let lastPrime
while(index < 10_001) {
    for (const n of ones) {
        if (isPrime (tens+n)){
            index++
            lastPrime = tens+n
        }
    }
    tens+=10
}

console.log(lastPrime);
