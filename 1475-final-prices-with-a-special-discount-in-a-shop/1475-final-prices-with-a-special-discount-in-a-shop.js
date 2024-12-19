/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
	let answer = [];
  	for (let i=0; i < prices.length-1; i++) {
      	let x = prices[i];
      	let min = prices[i];
      	for (let j=i; j < prices.length; j++) {
          	if (prices[j+1] <= x) {
              	min = prices[j+1];
              	answer.push(x-min);
              	break
          	}
          	if (j == prices.length || j == prices.length-2) {
            	answer.push(prices[i]);
				break
         	}  
      	}
	}
  	answer.push(prices[prices.length-1]);
  	return answer;
};