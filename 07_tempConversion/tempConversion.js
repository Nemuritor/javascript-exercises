const convertToCelsius = function(fTemperature) {
  let roundedTemperature = (fTemperature - 32) * 5 / 9;
  return Math.round(roundedTemperature * 10) / 10;
};

const convertToFahrenheit = function(cTemperature) {
  let roundedTemperature = (cTemperature * 9 / 5 + 32);
  return Math.round(roundedTemperature * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
