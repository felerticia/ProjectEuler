    let minD = -1;  // -1 means not found yet, positive number means found a candidate
    
    // For each upper pentagonal number index, going upward
    let i=2
    while (true){
        let pentI = pentagonalNumber(i);
        // If the next number down is at least as big as a found difference, then conclude searching
        if (minD != -1 && pentI - pentagonalNumber(i - 1) >= minD)
            break;
        
        // For each lower pentagonal number index, going downward
        for (let j = i - 1; j >= 1; j--) {
            let pentJ = pentagonalNumber(j);
            let diff = pentI - pentJ;
            // If the difference is at least as big as a found difference, then stop testing lower pentagonal numbers
            if (minD != -1 && diff >= minD)
                break;
            else if (isPentagonalNumber(pentI + pentJ) && isPentagonalNumber(diff))
                minD = diff;  // Found a smaller difference
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
    
    /* 
     * If y = pentagonalNumber(x) = x(3x-1) / 2,
     * then by the quadratic formula, the positive solution is x = (sqrt(24y + 1) + 1) / 6.
     * There exists a solution for x if and only if both of these conditions hold:
     * (24y + 1) is a perfect square, and sqrt(24y + 1) + 1 mod 6 = 0.
     * The second condition is equivalent to sqrt(24y + 1) = 5 mod 6.
     */
    let temp = y * 24 + 1;
    let sqrt = Math.sqrt(temp);
    return sqrt * sqrt == temp && sqrt % 6 == 5;
}