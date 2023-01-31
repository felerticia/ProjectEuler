let sum = 0;
for (let i = 3; i < 2_000_000; i++) {
    if (i == sumDigitsFactorial(i))
        sum += i;
}

function sumDigitsFactorial (x){
    let sum = 0;
    while (x != 0) {
        sum += factorial(x % 10);
        x = Math.floor(x / 10);
    }
    return sum;
}

function factorial (x) {
    if (x < 2) return 1
    return x * factorial(x-1)
}

console.log(sum);

