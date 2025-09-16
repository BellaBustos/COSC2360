"use strict";  // Enforce strict syntax

/*    JavaScript 7th Edition
      Chapter 4
      Project 04-01

      Application to calculate total moving cost
      Author: Bella Bustos
      Date:   9/15/2025

      Filename: project04-01.js
*/

// Global Constants
const COST_PER_LB = 0.50;
const COST_PER_MILE = 0.75;
const SETUP_COST = 500;

// Global Variables
let wgtBox = document.getElementById("wgtBox");
let distBox = document.getElementById("distBox");
let setupBox = document.getElementById("setupBox");
let msgBox = document.getElementById("msgBox");
let totalBox = document.getElementById("totalBox");

// Event Handlers
wgtBox.onchange = calcTotal;
distBox.onchange = calcTotal;
setupBox.onclick = calcTotal;

// Function to calculate an estimate of the total moving cost
function calcTotal() {
    let totalCost = 0;      // Set the initial estimate to $0
    msgBox.innerHTML = "";   // Erase any previous warning

    // Weight cost with error handling
    try {
        if (!(wgtBox.value > 0)) throw "!! Enter a positive weight";
        totalCost += wgtBox.value * COST_PER_LB;
    } catch (error) {
        msgBox.innerHTML = error;
        totalBox.innerHTML = ""; // Clear total if input invalid
        return;
    }

    // Distance cost with error handling
    try {
        if (!(distBox.value > 0)) throw "!! Enter a positive mileage";
        totalCost += distBox.value * COST_PER_MILE;
    } catch (error) {
        msgBox.innerHTML = error;
        totalBox.innerHTML = ""; // Clear total if input invalid
        return;
    }

    // Optional setup cost
    if (setupBox.checked) {
        totalCost += SETUP_COST;
    }

    // Display total cost
    totalBox.innerHTML = formatCurrency(totalCost);
}

// Function to format as currency
function formatCurrency(value) {
    return "$" + value.toFixed(2);
}
