let n = 500

const num_divisors = n =>{
	let count = 0;
    let end = Math.sqrt(n);
    for (let i = 1; i < end; i++) {
        if (n % i == 0)
            count += 2;
    }
    if (end * end == n)  // Perfect square
        count++;
    return count;
}

while(true) {
    const triangle = n * (n+1) / 2 
    if (num_divisors(triangle) > 500){
        console.log(triangle);
        return
    }
    n++
}