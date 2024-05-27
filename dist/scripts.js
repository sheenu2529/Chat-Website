document.addEventListener("DOMContentLoaded", function () {
  // Load header
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;

      // Toggle list of items on click
      const toggleButton = document.getElementById("toggleNavBtn");
      const navLinks = document.getElementById("navLinks");

      toggleButton.addEventListener("click", function () {
        navLinks.classList.toggle("hidden");
        navLinks.classList.toggle("flex");
      });

      // Collapse the menu when clicking anywhere outside
      document.addEventListener("click", function (event) {
        const isClickInside =
          toggleButton.contains(event.target) ||
          navLinks.contains(event.target);

        if (!isClickInside && !navLinks.classList.contains("hidden")) {
          navLinks.classList.add("hidden");
          navLinks.classList.remove("flex");
        }
      });
    })
    .catch((error) => {
      console.error("Error loading header:", error);
    });
});

// scripts.js

// Add event listeners to the Edit buttons
document.addEventListener("DOMContentLoaded", function () {
  const editButtons = document.querySelectorAll("button[data-name]");

  editButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      // Get user data from data attributes
      const userName = this.getAttribute("data-name");
      const userEmail = this.getAttribute("data-email");
      const userRole = this.getAttribute("data-role");

      // Store user data in localStorage to pass it to the edit.html page
      localStorage.setItem("editUserName", userName);
      localStorage.setItem("editUserEmail", userEmail);
      localStorage.setItem("editUserRole", userRole);

      // Redirect to the edit.html page
      window.location.href = "./edit.html";
    });
  });
});

// Populate the Edit User form with data from localStorage on edit.html
if (window.location.pathname.endsWith("edit.html")) {
  document.addEventListener("DOMContentLoaded", function () {
    const userName = localStorage.getItem("editUserName");
    const userEmail = localStorage.getItem("editUserEmail");
    const userRole = localStorage.getItem("editUserRole");

    if (userName && userEmail && userRole) {
      document.getElementById("firstname").value = userName.split(" ")[0];
      document.getElementById("lastname").value = userName.split(" ")[1];
      document.getElementById("email").value = userEmail;
      document.getElementById("role").value = userRole;
    }
  });
}
