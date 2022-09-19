// Given array of integers [arr] and integer [target];
// Check which numbers sum up to X in array, return indices in array as follows: [0, 1];
// Guaranteed: there always will be 2 numbers summing up to [target];
// Example: given arr = [2, 1, 5, 6, 8, 3]; 1 + 3 = 4, so return: [1, 5];

function sumOfTwoInArray(arr, target) {

	const previousValues = {};
  
  for (let i in arr) {
  
	  const valueDiff = target - arr[i];
  	
    if (valueDiff in previousValues) return [previousValues[valueDiff], i].map(Number);
    
    previousValues[arr[i]] = i;
    
  }

}

console.log(sumOfTwoInArray([2, 1, 5, 6, 8, 3], 4));
