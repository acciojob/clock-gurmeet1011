//your JS code here. If required.
function updateTimer() {
    const timerElement = document.getElementById("timer");

    // Get current date and time
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    const formattedDate = now.toLocaleDateString();

    // Display the formatted time and date in the timer element
    timerElement.innerHTML = `${formattedDate}, ${formattedTime}`;
}

// Update the timer every second (1000 ms)
setInterval(updateTimer, 1000);

// Call the function initially to avoid delay
updateTimer();
