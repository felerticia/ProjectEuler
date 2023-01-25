function countWays(coins, sum)
{
    const memo = Array(sum+1).fill(0);

    memo[0] = 1;
 
    for (const coin of coins) { 
        for (j=coin; j<=sum; j++){ 
            memo[j] += memo[j-coin]; 
            console.log(memo,j,coin);
        }
    }
    return memo;
}
 
const coins = [1, 2];
console.log(countWays(coins, 4));