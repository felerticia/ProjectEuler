const isEven = n => n % 2 == 0

let n = 1;
let chain = 1;
let maxChain = 1;
let maxNumber = 1;
for (index = 1; index <= 1_000_000; index++) {
    n = index;
    while (n != 1) {
        chain++;
        if (isEven(n)) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
    }
    if (chain > maxChain) {
        maxChain = chain;
        maxNumber = index;
    }
    chain = 1;
}

console.log(maxNumber,maxChain);

