/*  JavaScript 7th Edition
    Chapter 1
    Hands-On Project 1-2

    Author: Bella Bustos
    Date:   9/7/2025    

    Filename: project01-02.js
*/

//define variables for service name and service speed
// Convert Fahrenheit to Celsius
function FahrenheitToCelsius(degree) {
  return (degree - 32) / 1.8;
}

// Convert Celsius to Fahrenheit
function CelsiusToFahrenheit(degree) {
  return (degree * 1.8) + 32;
}

// Handle Celsius input changes
document.getElementById("cValue").onchange = function () {
  let cDegree = document.getElementById("cValue").value;
  document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
};

// Handle Fahrenheit input changes
document.getElementById("fValue").onchange = function () {
  let fDegree = document.getElementById("fValue").value;
  document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);
};
//  End of project01-02.js
/*  JavaScript 7th Edition
    Chapter 1
    Hands-On Project 1-2