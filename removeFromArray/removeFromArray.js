const removeFromArray = function(arrayInput, ...elementsToRemove) {
  for ( let i = 0 ; i < elementsToRemove.length ; i++) {
    for ( let j = 0 ; j < arrayInput.length ; j++) {
      if (arrayInput[j] === elementsToRemove[i]) {
        arrayInput.splice(j, 1);
        j--;
      }
    }
  }
  return arrayInput;
};

module.exports = removeFromArray;
