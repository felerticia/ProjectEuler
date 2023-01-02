let value = 77

let counter = 2
let highest = 1
while (counter*counter <= value){
    if (value%counter === 0){
        highest=counter
        value /= counter
    }
    else
        counter++
}

if (value>1)
    highest=value




console.log(highest)
