/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let max = 0;

    for (let i=0; i < prices.length; i++) {
        let today = prices[i];

        let profitToday = today - minPrice;

        max = Math.max(max, profitToday);
        minPrice = Math.min(minPrice, today);
    }
    return max;
};