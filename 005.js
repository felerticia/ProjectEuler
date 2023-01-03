const gcd = (a,b) => {
    if (b === 0) return a
    return gcd(b, a%b)
}

let ans = 1
for (let i = 2; i <= 10; i++) {
    ans = ans * i / gcd(i,ans)
}

console.log(ans);

