
// document.addEventListener("DOMContentLoaded", function () {
//       // Highlight active navigation link on click
//       const navLinks = document.querySelectorAll(".main-navbar .nav-link");
      
//       navLinks.forEach(link => {
//         link.addEventListener("click", function () {
//           navLinks.forEach(item => item.classList.remove("active"));
//           this.classList.add("active");
//         });
//       });
//     });

// document.addEventListener("DOMContentLoaded", function () {
//   // 1. Initialize Bootstrap Collapse for the navbar toggler
//   const navbarCollapseEl = document.getElementById("navbarContent");
  
//   if (navbarCollapseEl) {
//     const bsCollapse = new bootstrap.Collapse(navbarCollapseEl, {
//       toggle: false // Prevents automatic toggling on initialization
//     });

//     // 2. Auto-close mobile menu when a nav link is clicked
//     const navLinks = navbarCollapseEl.querySelectorAll(".nav-link");
    
//     navLinks.forEach(function (link) {
//       link.addEventListener("click", function () {
//         if (navbarCollapseEl.classList.contains("show")) {
//           bsCollapse.hide();
//         }
//       });
//     });

//     // 3. Highlight active nav item on click
//     navLinks.forEach(function (link) {
//       link.addEventListener("click", function () {
//         navLinks.forEach(item => item.classList.remove("active"));
//         this.classList.add("active");
//       });
//     });
//   }
// });


// Select the toggle button and the navigation links container
const navbartoggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Add click event listener to the hamburger button
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


var splide = new Splide( '.splide', {
  type   : 'loop',
  padding: '5rem',
} );

splide.mount();
