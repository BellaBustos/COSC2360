/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Bella Bustos
      Date:   9/14/2025

      Filename: project03-01.js
*/


// Get all menu item checkboxes
let menuItems = document.getElementsByClassName("menuItem");

// Add event listeners to each checkbox
for (let i = 0; i < menuItems.length; i++) {
   menuItems[i].addEventListener("change", calcTotal); // "change" event is better than "click"
}

// Function to calculate total cost
function calcTotal() {
   console.log("calcTotal is running...");
   let orderTotal = 0;

   // Loop through all menu items
   for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i].checked) {
         console.log("Adding item: " + menuItems[i].value);
         orderTotal += Number(menuItems[i].value);
      }
   }

   // Update the total in the page
   document.getElementById("billTotal").textContent = formatCurrency(orderTotal);
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
   return "$" + value.toFixed(2);
}
