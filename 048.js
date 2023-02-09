let modulus = BigInt (Math.pow(10,10));
let sum = BigInt(0);
for (let i = BigInt(1); i <= 1000; i++){
    let powerResult = BigInt(1)
    for (let pow = BigInt(1); pow <= i; pow++) {
        powerResult = (i * powerResult) % modulus
    }
    sum = BigInt(sum + powerResult) % modulus
}

   
console.log(sum);