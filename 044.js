    let minD = -1; 
    let i=2
    while (true){
        let pentI = pentagonalNumber(i);
        if (minD != -1 && pentI - pentagonalNumber(i - 1) >= minD)
            break;
        
        for (let j = i - 1; j >= 1; j--) {
            let pentJ = pentagonalNumber(j);
            let diff = pentI - pentJ;
            if (minD != -1 && diff >= minD)
                break;
            else if (isPentagonalNumber(pentI + pentJ) && isPentagonalNumber(diff))
                minD = diff;  
        }
        i++
    }
    console.log(minD);



function pentagonalNumber(x) {
    return x * (x * 3 - 1) / 2;
}


function isPentagonalNumber(y) {
    if (y <= 0)
        return false;
    

    let temp = y * 24 + 1;
    let sqrt = Math.sqrt(temp);
    return sqrt * sqrt == temp && sqrt % 6 == 5;
}