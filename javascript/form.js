document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;

    dateInput.addEventListener('click', function() {
        this.showPicker();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const timeInput = document.getElementById('latest-time');
    
    // Get the current time
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    // Format the time to `HH:MM`
    const formattedNow = `${hours}:${minutes}`;

    // Set the value of the time input
    timeInput.value = formattedNow;

    // Open the time picker when clicking anywhere on the input
    timeInput.addEventListener('click', function() {
        this.showPicker();
    });
});
