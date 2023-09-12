// document.addEventListener("DOMContentLoaded", function () {
//   const toggleButton = document.getElementById("toggleButton");
//   const content = document.getElementById("popup-menu");
//   const overlay = document.querySelector(".overlay"); // Select the overlay element

//   toggleButton.addEventListener("click", function () {
//     if (overlay.classList.contains("hidden")) {
//       // Show the content
//       overlay.classList.remove("hidden");
//       overlay.style.opacity = "1";
//       content.style.opacity = "1"; // Apply opacity to popup-menu
//       toggleButton.textContent = "CLOSE";
//     } else {
//       // Hide the content
//       overlay.classList.add("hidden");
//       overlay.style.opacity = "0"; // Apply opacity to overlay
//       content.style.opacity = "0"; // Apply opacity to popup-menu
//       toggleButton.textContent = "CONTACT";
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const popupMenu = document.getElementById("popupMenu");
  const closeButton = document.getElementById("closeButton");

  toggleButton.addEventListener("click", function () {
    popupMenu.classList.toggle("hidden");
    // Update the button text based on the menu's visibility
    if (popupMenu.classList.contains("hidden")) {
      toggleButton.textContent = "CONTACT";
    } else {
      toggleButton.textContent = "CLOSE";
    }
  });

  closeButton.addEventListener("click", function () {
    popupMenu.classList.add("hidden");
    toggleButton.textContent = "CONTACT"; // Reset the button text
  });
});
