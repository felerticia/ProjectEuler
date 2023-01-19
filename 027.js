const isPrime = x => {
    if (x == 0 || x == 1)
        return false
    if (x === 2)
		return true
	else{
        if (x % 2 == 0)
            return false;
		for (let i = 3, end = Math.sqrt(x); i<=end; i+=2){
			if (x % i === 0)
				return false
        }
		return true
    }
}

const getLength = (a,b) => {
    let i = 0
    while(true) {
        let n = (i * i) + (i * a) + b;
        if (n < 0 || !isPrime(n))
            return i;
        i++
    }
}


let candidate = 0;
let foundA = 0;
let foundB = 0;
for (let a = -999; a <= 999; a++) {
    for (let b = -1000; b <= 1000; b++) {
       let num = getLength(a, b);
        if (num > candidate) {
            candidate = num;
            foundA = a;
            foundB = b;
        }
    }
}
console.log(foundA * foundB);