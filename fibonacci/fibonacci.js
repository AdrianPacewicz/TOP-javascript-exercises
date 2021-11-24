const fibonacci = function(number) {
  if (number < 0)
    return "OOPS";
  lastNumber = 0;
  result = 1;
  for(let i = 2; i <= number; i++)
  {
    let aux = result;
    result = lastNumber + result;
    lastNumber = aux;
  }
  return result;
};

module.exports = fibonacci;
