
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


for (let n = 8; n >= 1; n--) {
    let digits = new Array(n);

    for (let i = 0; i < digits.length; i++)
        digits[i] = i + 1;

    console.log(digits);
    
    let result = -1;

    while (nextPermutation(digits)) {
        const d = parseInt(digits.join(''))
        if (isPrime(d))
            result = d
    } 

    if (result != -1){
    //    console.log(result)
        return
    }
}



function nextPermutation(arr) {
    let i = arr.length - 1;
    while (i > 0 && arr[i - 1] >= arr[i])
        i--

    if (i <= 0)
        return false;

    let j = arr.length - 1;
    while (arr[j] <= arr[i - 1])
        j--
   
    [arr[i-1],arr[j]] = [arr[j],arr[i-1]]

    for (let k = arr.length - 1; k > i; i++, k--) 
        [arr[i],arr[k]] = [arr[k],arr[i]]

    return true;
}
