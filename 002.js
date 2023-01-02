let f1 = 1
let f2 = 2
let index = 1
let sum = 0
while(f1 < 4_000_000){
    if (index % 3 === 1)
        sum += f2
    
    f1 = f1+f2
    index++
    [f1,f2] = [f2,f1]
}

console.log(sum);

