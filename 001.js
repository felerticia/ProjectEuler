let num = 1_000

const no3 = 3 * Math.floor(num/3) * (Math.floor(num/3) + 1) /2
const no5 = 5 * Math.floor(num/5) * (Math.floor(num/5) + 1) /2
const no15 = 15 * Math.floor(num/15) * (Math.floor(num/15) + 1) /2

console.log(no3 + no5 - no15);
