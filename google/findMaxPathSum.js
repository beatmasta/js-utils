// This question is a Google coding challenge
// The problem: "Given a binary tree, find the maximum path sum. The path may start and end at any node in the tree."
// Author: Alex Vanyan

class Node {

    constructor(number) {
        this.left = null;
        this.right = null;
        this.number = number;
    }

}

let max = Number.MIN_VALUE;

const findMaxSum = (node) => {

    const l = node.left ? findMaxSum(node.left) : 0;
    const r = node.right ? findMaxSum(node.right) : 0;

    const singleMax = Math.max(Math.max(l, r) + node.number, node.number);
    const maxCombined = Math.max(singleMax, l + r + node.number);

    max = Math.max(max, maxCombined);

    return singleMax;

};

const maxPathSum = (node) => {

    findMaxSum(node);

    return max;

};

const root = new Node(10);

root.left = new Node(2);
root.right = new Node(10);
root.left.left = new Node(20);
root.left.right = new Node(1);
root.right.right = new Node(-25);
root.right.right.left = new Node(3);
root.right.right.right = new Node(4);

console.log('Max path sum is:', maxPathSum(root)); // Max path sum is: 42
