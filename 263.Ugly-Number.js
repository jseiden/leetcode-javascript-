/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  
  function check(n) {
    var quotient = num/n;
    if (n == 1) {
      return true;
    }  
    if (quotient % 1 === 0 && quotient !== 2 && quotient !== 3 && quotient !== 5) {
      console.log(quotient);
      return false;
    }
    return check(n - 1);
  }
  return num === 1 ? true : check(num-1);
    
};

