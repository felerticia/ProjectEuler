
let i = 9
const isPrime = x => {
    if (x == 0 || x == 1)
        return false;
    if (x <= 3)
        return true
    if (x % 2 === 0)
		return false
	else{
		for (let i = 3; i<= Math.sqrt(x); i+=2){
			if (x % i === 0)
				return false
        }
		return true
    }
}
const satisfiesConjecture = n => {
    if (isPrime(n))
        return true;

    for (let i = 1; i * i * 2 <= n; i++) {
        if (isPrime(n - i * i * 2))
            return true;
    }
    return false;
}

while (true) {
    if (!satisfiesConjecture(i))
        break
    i+=2
}
console.log(i);