console.log("Let's see if it works, Birmingham!");

// Correctly get the current date and time
const currentDate = new Date();
console.log(currentDate);

// Array of month names
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Function to get the ordinal suffix for the day
function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}

// Format the date
const formattedDate = `${currentDate.toLocaleString('en-US', { weekday: 'long' })}, ${currentDate.getDate()}${getOrdinalSuffix(currentDate.getDate())} ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

// Format the time
const formattedTime = `${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`;

// Update the HTML elements
let dateElement = document.getElementById("currentDate");
let timeElement = document.getElementById("currentTime");

if (dateElement) {
    dateElement.textContent = formattedDate;
} else {
    console.error("Element with ID 'currentDate' not found.");
}

if (timeElement) {
    timeElement.textContent = formattedTime;
} else {
    console.error("Element with ID 'currentTime' not found.");
}

const birminghamUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.4814&longitude=-1.8998&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,sunshine_duration,rain_sum&timezone=GMT&forecast_days=3"; 

