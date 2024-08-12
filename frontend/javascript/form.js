document.addEventListener('DOMContentLoaded', function() {
    // Set default date and time
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('latest-time');

    // Set today's date
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;

    // Set current time
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeInput.value = `${hours}:${minutes}`;

    // Open date and time pickers when clicking the inputs
    dateInput.addEventListener('click', function() {
        this.showPicker();
    });

    timeInput.addEventListener('click', function() {
        this.showPicker();
    });
});

document.getElementById('reservationForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = document.getElementById('reservationForm');
    const reservationData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        date: document.getElementById('date').value,
        time: document.getElementById('latest-time').value,
        person: parseInt(document.getElementById('person').value, 10),
    };

    try {
        const response = await fetch('http://localhost:5000/api/table', { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reservationData),
        });

        const toast = document.getElementById('toast');

        if (response.ok) {
            toast.textContent = 'Reservation successful';
            toast.className = 'toast show';
            setTimeout(() => {
                toast.className = 'toast';
            }, 3000);
            form.reset(); // Reset the form after successful reservation
        } else {
            toast.textContent = 'Failed to reserve a table';
            toast.className = 'toast show';
            setTimeout(() => {
                toast.className = 'toast';
            }, 3000);
        }
    } catch (error) {
        const toast = document.getElementById('toast');
        toast.textContent = 'An error occurred';
        toast.className = 'toast show';
        setTimeout(() => {
            toast.className = 'toast';
        }, 3000);
    }
});
