// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"

document.onmousemove = (e) => {
  let body = document.querySelector("body");
  let maple = document.createElement("span");
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
  }, 2000);
};
