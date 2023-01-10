let contents = document.querySelectorAll(".skills-content");

function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (let i = 0; i < contents.length; i++) {
    if (isElementInViewport(contents[i])) {
      if(!contents[i].classList.contains("visible")){
        contents[i].classList.add("visible");
      }
    } else if(contents[i].classList.contains("visible")) {
        contents[i].classList.remove("visible");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
