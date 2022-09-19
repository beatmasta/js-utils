// LEVEL: Easy
// Given array of integers [arr];
// Solution type: prefix + postfix
// Calculate largest contiguous sum of array elements (sub-arrays);
// Example: given arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; 4 + (-1) + 2 + 1 = 6, so return: 6;

function naxSubArray(arr) {

    let sum = 0;
    let max = arr[0];

    for (let i in arr) {
        if (sum < 0) sum = 0; // make sure the sum is always a positive integer
        sum += arr[i];
        max = Math.max(max, sum);
    }

    return max;

}

console.log(naxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
