let sum = 1; 
for (let n = 3; n <= 1001; n += 2)
    sum += (4 * n * n ) - (6 * n) + 6;

console.log(sum);