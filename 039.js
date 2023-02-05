let maxPerimeter = 0;
let maxTriangles = 0;

const countSolutions = p =>  {
    let count = 0;
    for (let a = 1; a < p-1; a++) {
        for (let b = a; b < p-a; b++) {
            let c = p - a - b;
            if (b <= c && (a * a) + (b * b) == (c * c))
                count++;
        }
    }
    return count;
}
for (let p = 1; p <= 1000; p++) {
    let triangles = countSolutions(p);
    if (triangles > maxTriangles) {
        maxTriangles = triangles;
        maxPerimeter = p;
    }
}

console.log(maxPerimeter);