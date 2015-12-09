/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
   var i = 0;
   var len = nums.length;
   while (i < len) {
     if (nums[i] === val) {
       nums.splice(i,1);
       len = nums.length;
     } else {
       i++;
     }
   }
};

