const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

hoverSplitEvent(left, "hover-left");
hoverSplitEvent(right, "hover-right");

function hoverSplitEvent(elem, className) {
  elem.addEventListener("mouseenter", () => {
    container.classList.add(className);
  });
  elem.addEventListener("mouseleave", () => {
    container.classList.remove(className);
  });
}
