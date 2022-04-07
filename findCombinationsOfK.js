const arr = [1, 2, 3, 4, 5];
const K = 3;

function findCombinationsOfK(arr, K) {

	if (2 === K) {
  
  	let combinations = [];
		
    for (let k = 0; k <= arr.length - 2; ++k) {
    	for (let g = k + 1; g < arr.length; ++g) {
      	combinations.push([arr[k], arr[g]]);
      }
    }
    
    return combinations;
    
  }
  
  let combos = [];
  
	for (let i = 0; i < arr.length - 1; ++i) {
  	
    let recursiveCombos = findCombinationsOfK(arr.slice(i + 1, arr.length), K - 1);
		
    for (let j in recursiveCombos) {
 			combos.push([arr[i], ...recursiveCombos[j]]);
    }
    
  }
  
  return combos;
  
}

function findNCountCombinationsOfK(N, K) {
  return factorial(N) / (factorial(N - K) * factorial(K));
}

function factorial(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else return (num * factorial(num - 1));
}

console.log('combos', findCombinationsOfK(arr, K));
console.log('combos count', findNCountCombinationsOfK(arr.length, K));
