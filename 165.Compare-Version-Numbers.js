/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  var num1 = (version1.split(".")).map(function(num) { return +num;});
  var num2 = (version2.split(".")).map(function(num) { return +num;});
  var len = Math.max(num1.length, num2.length);

  for (var i = 0; i < len; i++) {
    if ((num1[i] && !num2[i]) || num1[i] > num2[i]) {
      return 1;
    } else if ((num2[i] && !num1[i]) || num2[i] > num1[i]) {
      return -1;
    } 
  }

  // else 
  return 0;
};
