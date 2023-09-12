document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const content = document.getElementById("popup-menu");
  const overlay = document.querySelector(".overlay"); // Select the overlay element

  toggleButton.addEventListener("click", function () {
    if (overlay.classList.contains("hidden")) {
      // Show the content
      overlay.classList.remove("hidden");
      overlay.style.opacity = "1";
      content.style.opacity = "1"; // Apply opacity to popup-menu
      toggleButton.textContent = "CLOSE";
    } else {
      // Hide the content
      overlay.classList.add("hidden");
      overlay.style.opacity = "0"; // Apply opacity to overlay
      content.style.opacity = "0"; // Apply opacity to popup-menu
      toggleButton.textContent = "CONTACT";
    }
  });
});
