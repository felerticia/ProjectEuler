let max = -1;

const isPanDigital = s => {
    if (s.length != 9)
        return false;
    let temp = s.split('').sort().join('');
    return temp === "123456789"
}

for (let n = 2; n <= 9; n++) {
    for (let i = 1; i < Math.pow(10, 9 / n); i++) {
        let str = "";
        for (let j = 1; j <= n; j++)
            str += i * j;
        if (isPanDigital(str))
            max = Math.max(parseInt(str), max);
    }
}
console.log(max);