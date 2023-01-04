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


//capture scroll any percentage
$(window).scroll(function(){
var wintop = $(window).scrollTo(), docheight =

    $(document).height(), winheight = $(window).height();
 			var scrolled = (wintop/(docheight-winheight))*100;

  		$('.scroll-line').scss('width', (scrolled + '%'));
});
