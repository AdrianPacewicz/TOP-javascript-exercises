const reverseString = function(str) {
  let result = "";
  for (let i = str.length ; i >= 0 ; i--) {
    result += str.slice(i,i+1);
  }

  return result;
};

module.exports = reverseString;
