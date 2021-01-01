// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = 0;
  let retVal = '';
  const obj = {};
  for (let c of str) {
    obj[c] = obj[c] + 1 || 1;
    if (obj[c] > max) {
      max = obj[c];
      retVal = c;
    }
  }

  return retVal;
}

// Solution

function maxChar1(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}
module.exports = maxChar;
