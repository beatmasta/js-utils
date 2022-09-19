// LEVEL: Medium
// Given array of integers [arr];
// Solution type: prefix + postfix
// Calculate product of all array elements without the current number at each iteration in O(n) time AND without using division operator;
// Example: given arr = [1, 2, 3, 4]; return: [24, 12, 8, 6];

function productExceptSelf(arr) {

    let prefix = 1;
    let postfix = 1;
    let res = arr.map(() => 1);

    for (let i = 0; i < arr.length; i++) {
        res[i] = prefix;
        prefix *= arr[i];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        res[i] *= postfix;
        postfix *= arr[i];
    }

    return res;

}

console.log(productExceptSelf([1, 2, 3, 4]));
