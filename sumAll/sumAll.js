const sumAll = function(a, b) {
  let sum = 0;
  
  if ( !Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    return 'ERROR';
  }

  if (a > b) {
    let aux = a;
    a = b;
    b = aux;
  }

  for (let i = a; i <= b; i++) {
    sum += i;
  }

  return sum;
};

module.exports = sumAll;
