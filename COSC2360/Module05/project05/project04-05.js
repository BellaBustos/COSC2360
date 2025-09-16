"use strict";

/*    JavaScript 7th Edition
      Chapter 4
      Project 04-05

      Degrees <-> Radians Converter
      Author: Bella Bustos
      Date:   9/15/2025

      Filename: project04-05.js
*/

// Function to convert degrees to radians 
function degreesToRadians(degrees) {
    let radians = degrees * Math.PI / 180;
    console.log("Radians = " + radians);
    return radians;
}

// Function to convert radians to degrees
function radiansToDegrees(radians) {
    let degrees = radians * 180 / Math.PI;
    console.log("Degrees = " + degrees);
    return degrees;
}

// Event handler: convert radians to degrees
document.getElementById("rValue").onchange = function() {
    let radians = parseFloat(document.getElementById("rValue").value);
    document.getElementById("aValue").value = formatValue3(radiansToDegrees(radians));
}

// Event handler: convert degrees to radians
document.getElementById("aValue").onchange = function() {
    let degrees = parseFloat(document.getElementById("aValue").value);
    document.getElementById("rValue").value = formatValue3(degreesToRadians(degrees));
}

/* ================================================================= */
// Function to display a numeric value in the format ##.### 
function formatValue3(value) {
    return value.toFixed(3);
}
