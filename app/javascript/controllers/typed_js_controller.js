import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

// Connects to data-controller="typed-js"
export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Click the button below to download my resume"],
      typeSpeed: 30,
      backDelay: 1000,
      loop: true
    })
  }
}
