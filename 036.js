let sum = 0

const isPalindrome = num => String(num).split('').reverse().join('') === String(num)


for (let i = 1; i < 1_000_000; i++) {
    if (isPalindrome(i) && isPalindrome(i.toString(2)))
        sum+=i
}

console.log(sum);