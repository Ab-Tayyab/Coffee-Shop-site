document.getElementById('subscription').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = document.getElementById('subscriptionForm');
    const toast = document.getElementById('toast');

    const subscriptionData = {
        email: document.getElementById('subscriptionEmail').value,
    };

    try {
        const response = await fetch('https://coffee-shop-server-phi.vercel.app/api/subscription', { 
            method: 'POST', 
            mode: 'no-cors', // Use only if you're unable to resolve CORS issues
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer YOUR_API_TOKEN`
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
            toast.textContent = 'Failed to get a Discount';
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
