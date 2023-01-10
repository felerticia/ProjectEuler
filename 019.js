let sum = 0
for (let y = 1901; y <= 2000; y++) {
    for (let m = 0; m <= 11; m++) {
        if (new Date(y, m, 1).getDay() === 0)
            sum++
        
    }
    
}

console.log(sum);
