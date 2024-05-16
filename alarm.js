// Function to update the clock display
function updateClock() {
    // Get the input element by its ID (though it is not used in this function)
    let inp1 = document.getElementById("inp1");

    // Get the current date and time
    let now = new Date();

    // Update the date display element with the current date
    let dateElement = document.getElementById("cldivin1");
    dateElement.textContent = now.getDate();

    // Update the hours display element with the current hour in 12-hour format
    let hoursElement = document.getElementById("cldivin2");
    let hours = now.getHours() % 12 || 12; // Convert to 12-hour format
    hoursElement.textContent = hours;

    // Update the minutes display element with the current minutes
    let minutesElement = document.getElementById("cldivin3");
    minutesElement.textContent = now.getMinutes();

    // Update the seconds display element with the current seconds
    let secondsElement = document.getElementById("cldivin4");
    secondsElement.textContent = now.getSeconds();
}

// Initial call to update the clock display
updateClock();

// Set an interval to update the clock display every second (1000 milliseconds)
let clockInterval = setInterval(updateClock, 1000);
