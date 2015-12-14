/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  var res = [];
  var temp = [];
  var i = 1; 

  temp.push(nums[0]);

  if (nums.length === 1) {
    res.push(temp[0].toString());
    return res;
  }

  for (; i < nums.length; i++) {
    if (+nums[i] === +(temp.slice(-1)[0]) + 1) {
      temp.push(nums[i]);
    } else {
      res.push (temp.length === 1 ? temp[0].toString() : temp[0].toString() + "->" + temp.pop()); 
      temp = [];
      temp.push(nums[i]);
    }

    if (i === nums.length -1) {
      res.push (temp.length === 1 ? temp[0].toString() : temp[0].toString() + "->" + temp.pop()); 
    }
  }
  
  return res;
    
};
