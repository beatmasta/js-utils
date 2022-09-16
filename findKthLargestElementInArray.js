// This is one of Google's popular interview questions 
// (c) Alex Vanyan

function findKthMax(arr, k) {

    if (!arr || !arr.length || arr.length < k) return null;

    let newArr = [];
    let max = -Infinity;

    for (let num of arr) {

        if (num > max) {
            newArr.unshift(num);
            max = num;
        }
        
    }

    return newArr[k - 1];
    
}

const intArray = [3, 4, 5, 12, 56, 123, 5598, 2, 1, 1, 0, -1];
const thirdLargestElement = findKthMax(intArray, 3);

console.log(thirdLargestElement);
