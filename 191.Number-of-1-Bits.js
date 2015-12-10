/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
   var bin = n.toString(2);

   //return bin.split("").reduce(function(a,b) {return +a + (b == 1)});
   
   return bin.split("").filter(function(num) { return num === "1";}).length;
};

