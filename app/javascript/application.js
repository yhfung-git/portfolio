// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"

// Mousemove Animation
document.onmousemove = (e) => {
  let body = document.querySelector("body");
  let maple = document.createElement("span");
  maple.setAttribute("id", "maple");
  let x = e.pageX;
  let y = e.pageY;
  let size = Math.random() * 50;

  maple.style.left = x + "px";
  maple.style.top = y + "px";
  maple.style.width = size + "px";
  maple.style.height = size + "px";
  body.appendChild(maple);

  setTimeout(() => {
    maple.remove();
  }, 1000);
};

// Timeline Animation
var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if(!items[i].classList.contains("in-view")){
        items[i].classList.add("in-view");
      }
    } else if(items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
