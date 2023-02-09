
const countPrimes = n => {
    let count = 0;
    let i = 2
    while(i <= Math.sqrt(n)){
        if (n % i == 0) {
            while (n % i == 0) n /= i
            count++;
        }
        i++
    }
    if (n > 1)
        count++;
    return count;
}

let i = 2

while (true) {
    if (countPrimes(i) === 4
        && countPrimes(i+1) === 4
        && countPrimes(i+2) === 4
        && countPrimes(i+3) === 4)
        break

    i++
}

console.log(i);