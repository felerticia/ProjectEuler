const n=10
let sumOfSquares = n * (n+1) * (2*n+1) / 6
let squareOfSums = Math.pow(n * (n+1) / 2 , 2 )

console.log(squareOfSums - sumOfSquares);

sumOfSquares = 0
squareOfSums = 0
for (let i = 0; i <= n; i++) {
    sumOfSquares += i*i
    squareOfSums += i
}

console.log(Math.pow(squareOfSums) - sumOfSquares);