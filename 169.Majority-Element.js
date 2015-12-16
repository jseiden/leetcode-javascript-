// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var storage = {};
    
    var len = nums.length;
    var half = nums.length/2;
   
    nums.forEach(function(num){
        storage[num] ? storage[num]++ : storage[num] = 1;
    });

    for(var key in storage){
      var tally = storage[key];
      if(tally > half){
          return +key;
      }
    }
};
