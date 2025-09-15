/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Bella Bustos
      Date: 9/14/2025

      Filename: project03-01.js
*/

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
    return "$" + value.toFixed(2);
}

// Get all menu item checkboxes
let menuItems = document.getElementsByClassName("menuItem");

// Add event listener to each menu item checkbox
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", calcTotal);
}

// Function to calculate the total cost
function calcTotal() {
    let orderTotal = 0;

    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].checked) {
            orderTotal += Number(menuItems[i].value);
        }
    }

    // Update the total in the page
    document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

