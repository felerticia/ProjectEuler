const factorial = a => {
    let f=1
    for (let i = 2; i <= a; i++) 
        f *= i
    return f
}
console.log(factorial(4) / (factorial(2) * factorial(4-2)))