import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="faq"
export default class extends Controller {
  static targets = ["front", "data", "back", "tools", "uix", "video", "softwares"]

  connect() {
  }

  toggleFront() {
    this.frontTarget.classList.toggle("hidden")
  }
  toggleData() {
    this.dataTarget.classList.toggle("hidden")
  }
  toggleBack() {
    this.backTarget.classList.toggle("hidden")
  }
  toggleTools() {
    this.toolsTarget.classList.toggle("hidden")
  }
  toggleUix() {
    this.uixTarget.classList.toggle("hidden")
  }
  toggleVideo() {
    this.videoTarget.classList.toggle("hidden")
  }
  toggleSoftwares() {
    this.softwaresTarget.classList.toggle("hidden")
  }

}
