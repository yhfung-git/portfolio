let tags = document.querySelectorAll(".tag");

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
  for (let i = 0; i < tags.length; i++) {
    if (isElementInViewport(tags[i])) {
      if(!tags[i].classList.contains("visible")){
        tags[i].classList.add("visible");
      }
    } else if(tags[i].classList.contains("visible")) {
        tags[i].classList.remove("visible");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
