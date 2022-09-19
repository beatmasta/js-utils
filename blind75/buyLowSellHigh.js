// LEVEL: Easy
// Given array of integers [arr] - every integer in the array represents the stock price on the next day;
// Solution type: two-pointer
// Check which day should stock be bought and on which should be sold to gain max profit (note: stock can't be sold on one of the previous days [prev array elements]);
// Example: given arr = [7, 1, 5, 3, 6, 4]; 6 - 1 = 5, so return: 5;

function buyLowSellHigh(arr) {

	let l = 0;
  let r = 1;
  let max = -Infinity;

	while (r < arr.length) {
  	
    if (arr[l] < arr[r]) {
    	const profit = arr[r] - arr[l];
      max = Math.max(max, profit);
    } else {
    	l = r;
    }
    
    ++r
    
  }
  
  return max;

}

console.log(buyLowSellHigh([7, 1, 5, 3, 6, 4]));
