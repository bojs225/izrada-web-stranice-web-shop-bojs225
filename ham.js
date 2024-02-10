// Function to toggle the visibility of the mobile menu
function toggleMenu() {
    var mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("show");
}

// Add options to the mobile menu
var mobileMenu = document.getElementById("mobileMenu");
var options = document.querySelectorAll(".category-dropdown option");

options.forEach(function(option) {
    var menuItem = document.createElement("a");
    menuItem.textContent = option.textContent;
    menuItem.setAttribute("href", option.value + ".html"); // Assuming HTML files are named accordingly
    menuItem.classList.add("mobile-menu-item");
    menuItem.addEventListener("click", toggleMenu);
    mobileMenu.appendChild(menuItem);
});
