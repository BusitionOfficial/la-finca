function updateTime() {
    const now = new Date();
    const options = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    }; // Customize display format
    const timeString = now.toLocaleString('en-US', options); // Adjust 'en-US' for your locale

    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

// Update the time immediately when the page loads
updateTime();

// Update the time every second
setInterval(updateTime, 1000); 