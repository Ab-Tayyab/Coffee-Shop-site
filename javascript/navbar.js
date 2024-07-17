
// document.addEventListener("DOMContentLoaded", function () {
//   const mobileMenu = document.querySelector(".mobile-menu");
//   const toggleBtn = document.getElementById("toggle-button");

//   toggleBtn.addEventListener("click", function () {
//     if (mobileMenu.style.display === "block") {
//       mobileMenu.style.display = "none";
//       toggleBtn.classList.remove("change");
//     } else {
//       mobileMenu.style.display = "block";
//       toggleBtn.classList.add("change");
//     }
//   });

 
//   window.addEventListener("resize", function () {
//     if (mobileMenu.style.display === "block" && window.innerWidth > 850) {
//       mobileMenu.style.display = "none";
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('toggleBtn');
  const menuClose = document.getElementById('menuClose');
  const dropdownMenu = document.getElementById('dropdownMenu');

  let isOpen = false;

  function handleToggle() {
      isOpen = !isOpen;
      dropdownMenu.classList.toggle('open', isOpen);
  }

  toggleBtn.addEventListener('click', handleToggle);
  menuClose.addEventListener('click', handleToggle);
});