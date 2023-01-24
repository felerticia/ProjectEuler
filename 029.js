const generated = {}

for (let a = 2; a <= 100; a++) {
    for (let b = 2; b <= 100; b++)
        generated[BigInt(Math.pow(a,b))] = true
}
console.log(Object.keys(generated).length);