const convertToCelsius = function(temp) {
  //32°F − 32) × 5/9 = 0°C
  let result = (temp - 32) * 5/9

  return Math.round(result * 10) / 10
};

const convertToFahrenheit = function(temp) {
  //(0°C × 9/5) + 32 = 32°F
  let result = (temp * 9/5) + 32

  return Math.round(result * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
