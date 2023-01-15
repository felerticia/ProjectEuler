const bound = 28123;
	
let abundant = []

const isAbundant = n => {
    let sum = 0
    for (let i = 1; i <= n / 2; i++) {
        if(n%i === 0)
            sum += i
    }
    return sum > n
}

for (let i = 2; i <= 28123; i++) {
    if (isAbundant(i))
        abundant.push(i)
}

const numbers = new Array(bound).fill(false)
for (let i = 0; i < abundant.length; i++) {
    for (let j = 0; j < abundant.length; j++) {
        if (abundant[i] + abundant[j] < bound)
			numbers[abundant[i] + abundant[j]] = true
        else
            break
    }
}


console.log(numbers.reduce((a,v,i) => a+(v ? 0: i),0));