const roundCursor = document.querySelector(".roundCursor");

window.addEventListener("mousemove", function (e) {
  roundCursor.style.left = e.pageX + "px";
  roundCursor.style.top = e.pageY + "px";
});

const anchorElements = document.querySelectorAll("a");

anchorElements.forEach(function (anchor) {
  anchor.addEventListener("mouseenter", function () {
    roundCursor.classList.add("active");
  });
});

anchorElements.forEach(function (anchor) {
  anchor.addEventListener("mouseleave", function () {
    roundCursor.classList.remove("active");
  });
});
