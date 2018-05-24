/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Example 1:
Input: [7, 1, 5, 3, 6, 4]
Output: 5

max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
Example 2:
Input: [7, 6, 4, 3, 1]
Output: 0

In this case, no transaction is done, i.e. max profit = 0.



Input: [7, 1, 5, 3, 6, 4]
Output: 5

	b,s
	s>b
	would could only buy first, and then sell.
	sell index must be after buy index

	7, 1  / 6
	1,5  / 4
	1,3  / 2
	
	 price - min price	
	 maxprofit	 

	at first we don't know what the minprice is, and will need to set a temp min price. 
	and when we see a price smaller than the temp min price, set min price  to that price we just saw.
	
	maxprofit = 0
	minprice = Number.MAX_VALUE

	linear scan of the elements 
		if prices[i] is less than the minprice 
				update minprice
		if price[i] minus minprice is larger than the maxprofit 
				update maxprofit
	
	return maxprodt

*/


var maxProfit = function (prices) {

	let maxprofit = 0,
		minprice = Number.MAX_VALUE

	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < minprice) {
			minprice = prices[i]
		}

		if (maxprofit < prices[i] - minprice) {
			maxprofit = prices[i] - minprice
		}

	}
	return maxprofit
};


console.log(maxProfit([7, 1, 5, 3, 6, 4]))