/**
 * @param {number} num
 * @return {number}
 */

var addDigits = function(num) {
  var n;

  if (num.toString().length === 1) {
      return num;
  }  

  n = num.toString().split("").reduce(function(a,b) {return +a + +b})

  return addDigits(n);
};
