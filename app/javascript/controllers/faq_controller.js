import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="faq"
export default class extends Controller {
  static targets = ["front", "data", "back", "tools", "uix", "video", "softwares"]

  connect() {
    // console.log("FAQ connected");
    // console.log(this.contentTarget);
  }

  showFront() {
    this.frontTarget.classList.toggle("hidden")
  }
  showData() {
    this.dataTarget.classList.toggle("hidden")
  }
  showBack() {
    this.backTarget.classList.toggle("hidden")
  }
  showTools() {
    this.toolsTarget.classList.toggle("hidden")
  }
  showUix() {
    this.uixTarget.classList.toggle("hidden")
  }
  showVideo() {
    this.videoTarget.classList.toggle("hidden")
  }
  showSoftwares() {
    this.softwaresTarget.classList.toggle("hidden")
  }
}
