document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile-menu");
  const toggleBtn = document.getElementById("toggle-button");
  toggleBtn.addEventListener("click", function () {
    if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
      toggleBtn.classList.remove("change");
    } else {
      mobileMenu.style.display = "block";
      toggleBtn.classList.add("change");

    }
  });
});
