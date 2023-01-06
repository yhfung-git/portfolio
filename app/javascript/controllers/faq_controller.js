import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="faq"
export default class extends Controller {
  connect() {
    console.log("FAQ connected");
  }
}
