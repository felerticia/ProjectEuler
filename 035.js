let i = 11
let count = 4

const isPrime = x => {
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

const nextCircular = u => {
    const str = String(u).split('')
    const c = [str]
    for (let i = 0; i < str.length; i++) {
        const element = c[c.length-1]
        element.unshift (element.pop())
        c.push ([...element])
    }
    return c.map(x => Number(x.join('')))
}

while (i < 1_000_000) {
    const circular = nextCircular(i)
    if (circular.every (n => isPrime(n)))
        count++
    i+=2
}

console.log(count);


