document.addEventListener("DOMContentLoaded", function() {
    // Accordion functionality
    const accordions = document.querySelectorAll(".accordion");
    accordions.forEach((accordion) => {
      accordion.addEventListener("click", function() {
        this.classList.toggle("active");
  
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });
  
    // Toggle menu functionality
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.querySelector(".mobile_menu");
  
    menuToggle.addEventListener("click", function() {
      mobileMenu.classList.toggle("active");
      this.classList.toggle("fa-bars");
      this.classList.toggle("fa-times"); // Change to close icon
    });
  });