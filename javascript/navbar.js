document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggle-button');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuItems = document.querySelectorAll('.menu-item');

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
    toggleButton.classList.toggle('change'); // add class for animation.
  });

  menuItems.forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default link behavior

      // Remove the active class from all menu items
      menuItems.forEach(i => i.classList.remove('active'));

      // Add the active class to the clicked menu item
      this.classList.add('active');

      // Close the mobile menu after clicking on a menu item
      mobileMenu.classList.remove('open');
      toggleButton.classList.remove('change');

      // Smooth scroll to the target section
      const targetId = this.querySelector('a').getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

// Smooth scroll for all anchor links with href starting with #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
