/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;

    for(let price = 1; price<prices.length; price++){
        if(prices[price] > prices[price - 1]){
            profit+= (prices[price] - prices[price - 1])
        }
    }

    return profit
    
};