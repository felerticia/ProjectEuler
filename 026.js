const getLength = n =>  {
    iterations = {} // {1:0, 10:1, 19:2}
    let current = 1 // 1
    let iter = 0  // 3
    while(true) {
        if (iterations[current])
            return iter - iterations[current];
        else {
            iterations[current] = iter
            current = current * 10 % n;
        }
        iter++
    }
}

let candidate = 0;
let longestIteration = 0;
for (let i = 1; i <= 1000; i++) {
    let len = getLength(i);
    if (len > longestIteration) {
        candidate = i;
        longestIteration = len;
    }
}

console.log(candidate);