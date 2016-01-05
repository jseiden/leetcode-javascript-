/*
Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], and [3,2,1].
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, used, results) {
  results = results || [];
  used = used || [];

  for (var i = 0; i < nums.length; i++) {
    var ch = nums.splice(i,1);
    used.push(ch);
    if (nums.length === 0) {
      results.push(used.map(function(el) { return +el }));
    }
    permute(nums, used, results);
    nums.splice(i, 0, ch);
    used.pop();
  }

  return results;
};

