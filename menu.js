document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const content = document.getElementById("popup-menu");

  toggleButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (content.classList.contains("hidden")) {
      // Show the content
      content.classList.remove("hidden");
      content.style.opacity = "1";
      toggleButton.textContent = "CLOSE";
    } else {
      // Hide the content content.style.opacity = "0";

      content.classList.add("hidden");
      // content.style.opacity = "1"; // Reset opacity for next opening
      toggleButton.textContent = "CONTACT";
    }
  });
});
