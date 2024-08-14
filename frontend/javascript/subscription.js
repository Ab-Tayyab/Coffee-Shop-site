

document.getElementById('subscription').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = document.getElementById('subscriptionForm');
    const toast = document.getElementById('toast');

    const subscriptionData = {
        email: document.getElementById('subscriptionEmail').value,
    };

    try {
        const response = await fetch('https://coffee-shop-server-three.vercel.app/api/subscription', { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(subscriptionData),
        });

        if (response.ok) {
            toast.textContent = 'You Got 50% Discount!';
            toast.className = 'toast show';
            setTimeout(() => {
                toast.className = 'toast';
            }, 3000);
            form.reset();
        } else {
            toast.textContent = 'Failed to get a Dicount';
            toast.className = 'toast show';
            setTimeout(() => {
                toast.className = 'toast';
            }, 3000);
        }
    } catch (error) {
        toast.textContent = 'An error occurred';
        toast.className = 'toast show';
        setTimeout(() => {
            toast.className = 'toast';
        }, 3000);
    }
});
