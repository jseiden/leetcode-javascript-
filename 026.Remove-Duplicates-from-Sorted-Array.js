// Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this in place with constant memory.

// For example,
// Given input array nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   var i = 0;
   var len = nums.length;
   while (i < len) {
     if (nums[i] === nums[i+1]) {
       nums.splice(i,1);
       len = nums.length;
     } else {
       i++;
     }
   }
   return nums.length;
};

console.log(removeDuplicates([1,1,4]));
