let items = [0,1,2,3,4,5,6,7,8,9]
let target = 999999
let res =[]

const findBiggestFactorial = (items,target)=> {
    const f = factorial(items.length-1)
    return {
        index : Math.floor(target / f),
        remainder : target - Math.floor(target / f) * f
    }
}

const factorial = n => {
    let f=1
    for (let i = n; i >1; i--) {
        f*=i
    }
    return f
}

while(items.length) {
    let {index, remainder} = findBiggestFactorial (items,target)
    res.push (items[index])
    target = remainder
    items = [
        ...items.slice(0,index),
        ...items.slice(index+1),
    ]
}

console.log(res.join(''));

