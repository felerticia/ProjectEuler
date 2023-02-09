
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

const listPrimes = () => {
    const list = []
    for (let i = 2; i < 1_000_000 ; i++) {
        if(isPrime(i))
            list.push(i)
    }
    return list
}


let maxSum = 0;
let maxRun = -1;
const primes = listPrimes()
for (let i = 0; i < primes.length; i++) {  // For each index of a starting prime number
    let sum = 0;
    for (let j = i; j < primes.length; j++) {  // For each end index (inclusive)
        sum += primes[j];
        if (sum > 1_000_000)
            break;
        else if (j - i > maxRun && sum > maxSum && primes.indexOf(sum) != -1) {
            maxSum = sum;
            maxRun = j - i;
        }
    }
}

console.log(maxSum);