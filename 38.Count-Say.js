/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n, count, sum) { 
  count = count || 1;
  sum = sum || "1";
  
  if (count === n) {
    return sum;
  }
  sum = getNext(sum);
  return countAndSay(n, count+1, sum);
};

function getNext(str) {
  var arr = [];
  var temp = [];
  for (var i = 0; i < str.length; i++) {
    if (i === str.length - 1) {
      if (temp.length && str[i] === temp[0]) {
        temp.push(str[i]);
        arr.push(temp);
        break;
      } else if (temp.length && str[i] !== temp[0]) {
        arr.push(temp);
        temp = [];
        temp.push(str[i]);
        arr.push(temp);
        break;
      } else if (!temp.length) {
        temp.push(str[i]);
        arr.push(temp);
        break;
      }
    } else {
      if (temp.length && str[i] === temp[0]) {
        temp.push(str[i]);
      } else if (temp.length && str[i] !== temp[0]) {
        arr.push(temp);
        temp = [];
        temp.push(str[i]);
      } else if (!temp.length) {
        temp.push(str[i]);
      }

    }
  }
  return arr.reduce(function(a,b) {
    return a + (b.length.toString() + b[0]);
  }, "");
}

