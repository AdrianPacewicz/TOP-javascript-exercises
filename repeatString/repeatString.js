const repeatString = function(str, number) {
  let result = "";

  if (number < 0) {
      return 'ERROR';
  }

  for (let i = 0; i < number ; i++) {
    result += str;
  }
  return result;
  };

module.exports = repeatString;
