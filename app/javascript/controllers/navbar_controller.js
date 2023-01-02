import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  connect() {
  }

  activeNavbar() {
    if (window.scrollY >= window.innerHeight/6 ) {
      this.element.classList.add("navbar-lewagon-active")
    } else {
      this.element.classList.remove("navbar-lewagon-active")
    }
  }
}
// this.element returns the controller’s HTML element
