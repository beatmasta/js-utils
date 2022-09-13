const binarySearchFirstIndexRecursive = (arr, x, start, end) => {

    if (start > end) return false;
    
    start = start || 0;
    end = end || arr.length - 1;

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) return mid;

    else if (x < arr[mid]) return binarySearchFirstIndexRecursive(arr, x, start, mid - 1);

    else return binarySearchFirstIndexRecursive(arr, x, mid + 1, end);
    
};

const found = binarySearchFirstIndexRecursive([1, 2, 3, 4, 4, 5, 5], 4);

console.log(found);
