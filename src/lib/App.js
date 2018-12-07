import "./css/App.css";
import cachedFetch from "fetch-unless-cached";
import Popper from "popper.js";
import debounce from "debounce";
import { encode } from "wiki-article-name-encoding";

const emit = (name, ...items) => document.dispatchEvent(new CustomEvent(name, { detail: items }));
const hasMouseOver = domElement => domElement && domElement.parentElement.querySelector(":hover") === domElement;

class Hovercard {
  constructor(settings = {}) {
    this.setup();
    this.padding = 20;
    this.activeElement = null;
    this.settings = settings;
  }
  setup() {
    this.elements = document.querySelectorAll(".hovercard");
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].addEventListener("mouseover", () => {
        this.activeElement = this.elements[i];
        this.mouseOver();
      });
      this.elements[i].addEventListener("mouseout", () => this.mouseOut());
      this.elements[i].addEventListener("mousemove", () => debounce(this.positionHovercard, 100));
    }
  }
  createHovercard() {
    if (document.querySelector(".hovercard-element")) return;
    const card = document.createElement("a");
    card.classList.add("hovercard-element");
    document.body.appendChild(card);
    card.addEventListener("mouseout", () => this.mouseOut());
    card.addEventListener("mousemove", () => debounce(this.positionHovercard, 100));
    const arrow = document.createElement("div");
    arrow.setAttribute("x-arrow", "");
    arrow.classList.add("hovercard-arrow");
    arrow.addEventListener("mouseout", () => this.mouseOut());
    arrow.addEventListener("mousemove", () => debounce(this.positionHovercard, 100));
    document.body.appendChild(arrow);
    emit("hovercardCreated", card);
  }
  positionHovercard() {
    if (!this.activeElement) return;
    const card = document.querySelector(".hovercard-element"); if (!card) return;
    const arrow = document.querySelector(".hovercard-arrow"); if (!arrow) return;
    new Popper(this.activeElement, card, {
      modifiers: {
        offset: {
          offset: "0, 20"
        }
      }
    });
    setTimeout(() => {
      new Popper(card, arrow, {
        placement: card.getAttribute("x-placement") === "top" ? "bottom" : "top"
      });
    }, 1);
  }
  updateHovercard(data) {
    if (!this.activeElement) return;
    if (!(data.displaytitle && data.extract)) return;
    const card = document.querySelector(".hovercard-element"); if (!card) return;
    const arrow = document.querySelector(".hovercard-arrow"); if (!arrow) return;
    card.innerHTML = `
      <h2 class="hovercard-title">${data.displaytitle}</h2>
      <p class="hovercard-description">${data.extract}</p>`;
    if (data.thumbnail && data.thumbnail.source) {
      card.innerHTML += `<div class="hovercard-image" style="background-image: url('${data.thumbnail.source}')"></div>`;
      card.classList.add("hovercard-has-image");
    } else {
      card.classList.remove("hovercard-has-image");
    }
    card.removeAttribute("href");
    if (this.settings.target) {
      card.setAttribute("target", this.settings.target);
    } else {
      card.setAttribute("target", "_blank");
    }
    if (this.settings.link === "wikipedia") {
      card.setAttribute("href", `https://${this.settings.lang || "en"}.wikipedia.org/wiki/${encode(this.activeElement.getAttribute("data-hovercard-title") || this.activeElement.innerText)}`);
    } else if (this.settings.link === "inherit") {
      card.setAttribute("href", this.activeElement.getAttribute("href"));
    }
    if (this.activeElement.getAttribute("data-link")) {
      card.setAttribute("href", this.activeElement.getAttribute("data-link"));
    }
    card.classList.add("hovercard-visible");
    arrow.classList.add("hovercard-visible");
    emit("hovercardUpdated", card, data, this.activeElement);
  }
  mouseOver() {
    this.createHovercard();
    this.activeElement.classList.add("hovercard-loading");
    cachedFetch(`https://${this.settings.lang || "en"}.wikipedia.org/api/rest_v1/page/summary/${encode(this.activeElement.getAttribute("data-hovercard-title") || this.activeElement.innerText)}`)
      .then(response => {
        this.activeElement.classList.add("hovercard-success");
        emit("hovercardData", response);
        this.updateHovercard(response);
        this.activeElement.classList.add("hovercard-visible");
        this.positionHovercard();
      })
      .catch(error => {
        emit("hovercardError", error, this.activeElement);
        this.activeElement.classList.add("hovercard-error");
      })
      .then(() => {
        this.activeElement.classList.remove("hovercard-loading");
      });
    emit("hovercardMouseover", this.activeElement);
  }
  mouseOut() {
    setTimeout(() => {
      const card = document.querySelector(".hovercard-element"); if (!card) return;
      const arrow = document.querySelector(".hovercard-arrow"); if (!arrow) return;
      let hasHover = hasMouseOver(card) || hasMouseOver(arrow);
      for (let i = 0; i < this.elements.length; i++)
        if (hasMouseOver(this.elements[i])) hasHover = true;
      if (!hasHover) {
        this.activeElement && this.activeElement.classList.remove("hovercard-visible");
        card.classList.remove("hovercard-visible");
        arrow.classList.remove("hovercard-visible");
        this.activeElement = null;
      }
    }, this.settings.timeout || 50);
    emit("hovercardMouseOut", this.activeElement);
  }
}

export default Hovercard;