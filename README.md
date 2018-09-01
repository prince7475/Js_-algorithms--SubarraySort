# Js_-algorithms--SubarraySort


Input:Your SolutionOur SolutionNo changes made.
Run Code

1
function subarraySort(array) {
2
  // Write your code here.
3
}
4
​
5
// Do not edit the line below.
6
exports.subarraySort = subarraySort;
7
​
Tests:HideShow

1
const program = require("./program");
2
const chai = require("chai");
3
​
4
it('Test Case #1', function() {
5
  chai.expect(program.subarraySort([1, 2])).to.deep.equal([-1, -1]);
6
});
7
​
8
it('Test Case #2', function() {
9
  chai.expect(program.subarraySort([2, 1])).to.deep.equal([0, 1]);
10
});
11
​
12
it('Test Case #3', function() {
13
  chai.expect(program.subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19])).to.deep.equal([3, 9]);
14
});
15
​
16
it('Test Case #4', function() {
17
  chai.expect(program.subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 7, 7, 16, 18, 19])).to.deep.equal([4, 9]);
18
});
19
​
20
it('Test Case #5', function() {
21
  chai.expect(program.subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 13, 14, 16, 18, 19])).to.deep.equal([4, 6]);
Output:Custom OutputRaw Output
Run your code when you feel ready.
Question:JavaScriptPythonC++JavaGoQuestions List

​
Subarray Sort
​
Write a function that takes in an array of integers of length at least 2. The function should return an array of the starting and ending indices of the smallest subarray in the input array that needs to be sorted in place in order for the entire input array to be sorted. If the input array is already sorted, the function should return [-1, -1].
​
Sample input: [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
Sample output: [3, 9]
​
Help:HideShow
0 (n) time | 0 (1) space - where n is the length of the input array

​
Video ExplanationGo to Conceptual OverviewGo to Code WalkthroughQuestions List
Copyright © 2018 AlgoExpert, LLC. All rights reserved.Legal StuffContact Us
