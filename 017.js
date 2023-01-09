

const ones = [
    "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

const tens = [
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]


const getString = n => {
    if (n < 20)
        return ones[n];
    else if (n < 100)
        return tens[Math.floor(n / 10)] + (n % 10 === 0 ? "" : ones[n % 10]);
    else if ( n < 1000)
        return ones[Math.floor(n / 100)] + "hundred" + (n % 100 === 0 ? "" : "and" + getString(n % 100));
    else 
        return getString(n / 1000) + "thousand" + (n % 1000 === 0 ? "" : getString(n % 1000));
}


let sum = 0;
for (let i = 1; i <= 1000; i++)
    sum += getString(i).length;

console.log(sum);




