const binarySearchFirstIndex = (arr, x) => {

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {

        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === x) return mid;

        else if (x < arr[mid]) end = mid - 1;

        else start = mid + 1;
        
    }

    return false;
    
};

const found = binarySearchFirstIndex([1, 2, 3, 4, 4, 5, 5], 4);

console.log(found); // false or [index] of the found number
