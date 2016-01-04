// You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. 
// Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly 
// in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). 
// Your friend will use successive guesses and hints to eventually derive the secret number.

// For example:

// Secret number:  "1807"
// Friend's guess: "7810"
// Hint: 1 bull and 3 cows. (The bull is 8, the cows are 0, 1 and 7.)
// Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. In the above example, your function should return "1A3B".

// Please note that both secret number and friend's guess may contain duplicate digits, for example:

// Secret number:  "1123"
// Friend's guess: "0111"
// In this case, the 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow, and your function should return "1A1B".
// You may assume that the secret number and your friend's guess only contain digits, and their lengths are always equal.

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  var bulls = 0;
  var cows = 0;
  var secretStorage = {};
  var guessStorage = [];
  var i;
  var key;

  for (i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      secretStorage[secret[i]] = secretStorage[secret[i]] + 1 || 1; 
      guessStorage.push(guess[i]);
    }
  }

  guessStorage.forEach(letter => {
    if (secretStorage[letter]) {
      cows++;
      if (secretStorage[letter] === 1) {
        delete secretStorage[letter];
      } else {
        secretStorage[letter]--;
      }
    }
  });
  
  return bulls + "A" + cows + "B";
};

console.log(getHint("1234","0111"));
