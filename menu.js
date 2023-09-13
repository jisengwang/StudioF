document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const popupMenu = document.getElementById("popupMenu");
  const closeButton = document.getElementById("closeButton");
  // const veil = document.getElementById("veil");

  toggleButton.addEventListener("click", function () {
    popupMenu.classList.toggle("hidden");
    // veil.style.display = veil.style.display === "block" ? "none" : "block";
    // Update the button text based on the menu's visibility
    if (popupMenu.classList.contains("hidden")) {
      toggleButton.textContent = "CONTACT";
    } else {
      toggleButton.textContent = "CLOSE";
    }
  });

  closeButton.addEventListener("click", function () {
    popupMenu.classList.add("hidden");
    // veil.style.display = "none";
    toggleButton.textContent = "CONTACT"; // Reset the button text
  });
});
