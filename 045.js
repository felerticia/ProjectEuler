let i = 286;
let j = 166;
let k = 144;
while (true) {
    const triangle =   (i * (i + 1) / 2);
    const pentagon =  (j * (j * 3 - 1) / 2);
    const hexagon  =  (k * (k * 2 - 1));
    const min = Math.min(triangle, pentagon, hexagon);
    if (min == triangle && min == pentagon && min == hexagon){
        console.log(min);
        break
    }
    if (min == triangle) i++;
    if (min == pentagon) j++;
    if (min == hexagon ) k++;
}