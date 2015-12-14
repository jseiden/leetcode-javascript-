/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
   var storage1 = {};
   var storage2 = {};
   var i = 0;
   for (; i < s.length; i++) {
     storage1[s[i]] = storage1[s[i]] || []; 
     if (storage1[s[i]].indexOf(t[i]) === -1) {
       storage1[s[i]].push(t[i]);
     }
     
     storage2[t[i]] = storage2[t[i]] || []; 
     if (storage2[t[i]].indexOf(s[i]) === -1) {
       storage2[t[i]].push(s[i]);
     }
     
     // return false if any letter maps to more than one letter in other string 
     if (storage1[s[i]].length > 1 || storage2[t[i]].length > 1) {
       return false;
     }

   }
   return true;
};

