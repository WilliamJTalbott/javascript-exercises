const add = function(x, y) {
	return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(arr) {
  let result = 0
  for (i = 0; i < arr.length; i++) {
    result += arr[i]
  }
  return result

};

const multiply = function(arr) {
  let result = arr[0]
  for (i = 1; i < arr.length; i++) {
    result *= arr[i]
  }
  return result
};

const power = function(x, y) {
	return x ** y
};

const factorial = function(x) {

let result = 1

	for (i = 1; i <= x; i++) {

    result *= i

  }

  return result

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
