const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let sum = 0;
  arr.forEach(num => sum += num);
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  arr.forEach(num => product *= num);
  return product;
};

const power = function(num, exp) {
	return Math.pow(num, exp)
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
