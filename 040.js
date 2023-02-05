let s =''
for (let i=1; i<1_000_000; i++)
    s+=i
	
ans = 1
for (let i=0; i<7; i++)
    ans *= parseInt(s[Math.pow(10,i) - 1])

console.log(ans)