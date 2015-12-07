/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  var count = 0;
  for (var j = 2; j < n; j++) {
    if (isPrime(j)) {
      count++;
    }
  }
  return count;
    
};

var isPrime = function(num) {
  for (var i = num - 1; i > 1; i--) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

