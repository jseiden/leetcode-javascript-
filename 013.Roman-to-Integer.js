// Given a roman numeral, convert it to an integer.

// Input is guaranteed to be within the range from 1 to 3999.


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   var table = {
     "I":1,
     "V":5,
     "X":10,
     "L":50,
     "C":100,
     "D":500,
     "M":1000
   }; 

   var res = 0;
   var len = s.length;
   var i = 0;

   while (i < len) {
      if (i < len - 1 && table[s[i]] < table[s[i+1]]) {
        res += (table[s[i+1]] - table[s[i]]);
        i += 2;
      } else {
        res += table[s[i]];
        i++;
      }
   }

   return res;
};

console.log(romanToInt("XL"));
