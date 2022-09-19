// LEVEL: Easy
// Given array of integers [arr] tell if it has duplicate values in it (occurring AT LEAST twice);
// Solution type: hash map
// Example: given arr = [1, 2, 3, 4, 4, 5, 6]; there are two 4's, so return: true;

function arrayHasDuplicateValues(arr) {

    let occurrences = {};

    for (let i in arr) {
        if (arr[i] in occurrences) return true;
        occurrences[arr[i]] = true;
    }

    return false;

}

console.log(arrayHasDuplicateValues([1, 2, 3, 4, 4, 5, 6]));
