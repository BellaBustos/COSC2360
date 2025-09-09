/*    JavaScript 7th Edition
      Chapter 2
      Project 02-05


      Author: Bella Bustos
      Date: 9/9/25

      Filename: project02-05.js
 *//* 
  Author: Your Name
  Date: MM/DD/YYYY
*/

// Convert Fahrenheit to Celsius
function FahrenheitToCelsius(degree) {
  return (degree - 32) / 1.8;
}

// Convert Celsius to Fahrenheit
function CelsiusToFahrenheit(degree) {
  return (degree * 1.8) + 32;
}

// Handle Celsius input
document.getElementById("cValue").onchange = function() {
  let cDegree = parseFloat(document.getElementById("cValue").value);
  if (!isNaN(cDegree)) {
    document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree).toFixed(2);
  }
};

// Handle Fahrenheit input
document.getElementById("fValue").onchange = function() {
  let fDegree = parseFloat(document.getElementById("fValue").value);
  if (!isNaN(fDegree)) {
    document.getElementById("cValue").value = FahrenheitToCelsius(fDegree).toFixed(2);
  }
};

 



