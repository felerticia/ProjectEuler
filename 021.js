let sum = 0;

const divisorSum = number => {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i == 0)
            sum += i;
    }
    return sum;
}

const isAmicable = number => {
    let sum = divisorSum(number);
    return sum != number && divisorSum(sum) === number
}

for (let i = 1; i < 10000; i++) {
    if (isAmicable(i))
        sum += i;
}
console.log(sum);


