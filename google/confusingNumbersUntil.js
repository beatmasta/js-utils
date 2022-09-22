// This question is a Google coding challenge
// The problem:
//      "We can rotate digits by 180 degrees to form new digits. When 0, 1, 6, 8, 9 are rotated 180 degrees,
//      they become 0, 1, 9, 8, 6 respectively. When 2, 3, 4, 5, and 7 are rotated 180 degrees, they become invalid.
//      A confusing number is a number that when rotated 180 degrees becomes a different number with each digit valid.
//      (Note that the rotated number can be greater than the original number.)
//      Given a positive integer N, return the number of confusing numbers between 1 and N inclusive."
// Author: Alex Vanyan

function confusingNumbersUntil(N) {

    const confusingMap = new Map();
    let result = { count: 0 };

    confusingMap.set(0, 0);
    confusingMap.set(1, 1);
    confusingMap.set(6, 9);
    confusingMap.set(8, 8);
    confusingMap.set(9, 6);

    function countConfusing(N, curr, result) {

        if (isConfusing(curr)) ++result.count;

        for (let i of confusingMap.keys()) {

            const next = 10 * curr + i;

            if (next <= N && next !== 0) countConfusing(N, next, result);

        }

    }

    function isConfusing(n) {

        let src = n;
        let res = 0;

        while (n > 0) {
            res = res * 10 + confusingMap.get(Math.floor(n % 10));
            n /= 10;
        }

        return src !== res;

    }

    countConfusing(N, 0, result);

    return result.count;

}

console.log(confusingNumbersUntil(99));
