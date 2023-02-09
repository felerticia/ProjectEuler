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

let sum = 0
let digits = new Array(10).fill().map((x,i) => i)

while (nextPermutation(digits)){
    if (
        Number(digits.slice(1,4).join('')) % 2 === 0 &&
        Number(digits.slice(2,5).join('')) % 3 === 0 &&
        Number(digits.slice(3,6).join('')) % 5 === 0 &&
        Number(digits.slice(4,7).join('')) % 7 === 0 &&
        Number(digits.slice(5,8).join('')) % 11 === 0 &&
        Number(digits.slice(6,9).join('')) % 13 === 0 &&
        Number(digits.slice(7,10).join('')) % 17 === 0 
    )

    sum += Number(digits.join(''))
}

console.log(sum);

