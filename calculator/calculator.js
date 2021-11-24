const add = function(a, b) {
	let c = a + b;
  return c;
};

const subtract = function(a, b) {
	let c = a - b;
  return c;
};

const sum = function(a) {
  let suma = 0;
  a.forEach(function(n)
  {
    suma += n;
  })
  return suma;
};

const multiply = function(array) {
  acum = 0;
  let result = array.reduce((acum,num) => acum * num);
  return result;
};

const power = function(a,b) {
	let c = Math.pow(a, b);
  return c;
};

const factorial = function(a) {
	var res = 1;
    for (var i = 2; i <= a; i++)
        res = res * i;
    return res;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
