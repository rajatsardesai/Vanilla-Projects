/* Code to display countdown timer */
// End date
const endDate = "31 December 2023 12:00 AM";

// Grabs all the inputs from DOM
const inputs = document.querySelectorAll('input');

// Function to display the clock
function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    inputs[0].value = endDate;
    inputs[1].value = Math.floor(diff / 3600 / 24);
    inputs[2].value = Math.floor(diff / 3600) % 24;
    inputs[3].value = Math.floor(diff / 60) % 60;
    inputs[4].value = Math.floor(diff) % 60;
}

// Calls function every second
setInterval(() => {
    clock();
}, 1000);

clock();

/*
1 day = 24 hours
1 hour = 60 minutes
60 minute = 3600 seconds
1 second = 1000 milliseconds
*/