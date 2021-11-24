const palindromes = function (phrase) {
  
  phrase = phrase.toLowerCase();
  phrase = phrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  phrase = phrase.replace(/[\s]/g,"");
  reverseString = function(str) {
    let result = "";
    for (let i = str.length ; i >= 0 ; i--) {
      result += str.slice(i,i+1).toLowerCase();
    }
  
    return result;
  };
  let reversedString = reverseString(phrase);
  return (reversedString == phrase);
};

module.exports = palindromes;
