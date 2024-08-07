document.addEventListener("DOMContentLoaded", function() {
    const dots = document.querySelectorAll('.nav-dot');
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialsPerPage = 3; // Number of testimonials to show per page
    let currentIndex = 0; // Current page index

    function showTestimonials(index) {
        testimonials.forEach((testimonial, idx) => {
            testimonial.style.display = 'none';
            if (idx >= index * testimonialsPerPage && idx < (index + 1) * testimonialsPerPage) {
                testimonial.style.display = 'block';
            }
        });
        dots.forEach(dot => dot.classList.remove('active'));
        if (index < dots.length) {
            dots[index].classList.add('active');
        }
    }

    function updateDots() {
        // Update the dot navigation based on the number of pages
        const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
        dots.forEach((dot, index) => {
            dot.style.display = (index < totalPages) ? 'inline-block' : 'none';
        });
    }

    // Handle dot click
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showTestimonials(currentIndex);
        });
    });

    // Initial state
    showTestimonials(currentIndex);
    updateDots();
});
