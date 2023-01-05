let limit = 1000
for (let a = 1; a <= limit; a++) {
    for (let b = a + 1; b <= limit; b++) {
        const c = limit - a - b
        if (a*a + b*b === c*c){
            console.log(a,b,c,a*b*c);
            return
        }
    }
}
