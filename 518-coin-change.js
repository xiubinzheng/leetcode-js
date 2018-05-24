function coinchange(amount, coins) {
    return coinchangeHelper(amount, coins, 0);
}

function coinchangeHelper(amount, coins, index) {
    if (amount === 0)
        return 1;
    if (amount < 0 || index >= coins.length)
        return 0;

    // you can include the current coin in the solution and not increment index + don't include current coin and increment index
    return coinchangeHelper(amount - coins[index], coins, index) + coinchangeHelper(amount, coins, index + 1);
}

function coinchangedp(amount, coins) {
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] += dp[j - coins[i]];
        }
    }
    return dp[amount];
}


let test = 9999999;

let arr = [8];

console.time('coin change');
//console.log(coinchange(test,arr));
console.timeEnd('coin change');

console.time('coin change dp');
console.log(coinchangedp(test, arr));
console.timeEnd('coin change dp');