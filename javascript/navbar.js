
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggle-button');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuItems = document.querySelectorAll('.menu-item')

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
    toggleButton.classList.toggle('change'); // add class for add animation.
  });

  // this function is used for active class when click on menu and it become active.
  
  menuItems.forEach(item => {
    item.addEventListener("click", function(event) {
        event.preventDefault();  // Prevent the default link behavior

        // Remove the active class from all menu items
        menuItems.forEach(i => i.classList.remove("active"));

        // Add the active class to the clicked menu item
        this.classList.add("active");
    });
});
});
