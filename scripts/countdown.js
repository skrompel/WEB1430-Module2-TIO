/*

Author: Sahara Krompel
Date: 27 May 2025
Purpose: Countdown to Graduation Clock

*/

"use strict";

window.alert("Welcome to my Graduation Countdown Clock");

// Execute the 'runClock' function to run and display the countdown clock
runClock();
setInterval("runClock()", 1000); // Expressed as milliseconds

// Function to create and run the countdown clock

function runClock() {

    var currentDay = new Date();

    // Display the current date and time to the user
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();

    document.getElementById("date-now").innerHTML = dateStr + "<br />" + timeStr;

    // Calculate the dates until graduation 
    var gradDate = new Date ("April 24, 2026");
    var nextYearGradDate = gradDate.getFullYear + 1;
    var daysLeft = (gradDate - currentDay) / (1000 * 60 * 60 * 24); // Converting milliseconds into days
    var hoursLeft = (daysLeft - Math.floor(daysLeft)) * 24;
    var minutesLeft = (hoursLeft - Math.floor(hoursLeft)) * 60;
    var secondsLeft = (minutesLeft - Math.floor(minutesLeft)) * 60;

    // Display the time left until graduation
    document.getElementById("countdown-days").textContent = Math.floor(daysLeft);
    document.getElementById("countdown-hours").textContent = Math.floor(hoursLeft);
    document.getElementById("countdown-minutes").textContent = Math.floor(minutesLeft);
    document.getElementById("countdown-seconds").textContent = Math.floor(secondsLeft);

}

