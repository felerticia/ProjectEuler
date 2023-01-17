let f1 = [1]
let f2 = [1]
let index = 2

while (f2.length < 1000){
    let temp = fibo(f1,f2)
    f1 = f2
    f2 = temp
    index++
}

console.log(index);

function fibo (a,b) {
    let c = new Array (b.length + 1)

    if(b.length > a.length)
        a.unshift(0)

    for (let i = b.length-1; i >= 0; i--) {
        c[i+1] = a[i] + b[i] + (c[i+1] || 0)
        if (c[i+1] > 9){
            c[i+1]-=10
            c[i] = 1
        }
    }

    if (!c[0])
        c.shift()
    return c
}