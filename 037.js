let sum = 0
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
const  canTruncate = n => {
    let i= 10
    while (i<=n){
        if (!isPrime(n % i))
            return false;
        i *= 10
    }

    while (n!= 0){
        if (!isPrime(n))
            return false;
        n = Math.floor (n/10)
    }
    
    return true;
}

for (let count = 1, n = 10; count <= 11; n++) {
    if (canTruncate(n)) {
        sum += n;
        count++;
    }
}
console.log(sum)