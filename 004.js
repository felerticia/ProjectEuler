let max = 0

const isPalindrome = num => {
    const str = String(num)
    return str === str.split('').reverse().join('')
}

for (let i = 999; i > 100; i--) {
    for (let j = 999; j > 100; j--) {
        const product = i * j;
        if (isPalindrome(product))
            max = Math.max(product,max);
    }
}

console.log(max);