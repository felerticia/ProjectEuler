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

const hasSameDigits = (x,y) => 
    String(x).split('').sort().join('') === String(y).split('').sort().join('')


for (let base = 1001; base <= 9999; base+=2) {
    if (isPrime(base)) {
        for (let step = 1; step <= 9999; step++) {
            let a = base + step;
            let b = a + step;
            if (a < 9999 && isPrime(a) && hasSameDigits(a, base)
                && b < 9999 && isPrime(b) && hasSameDigits(b, base)
                && (base != 1487))
                console.log( "" + base + a + b);
        }
    }
}