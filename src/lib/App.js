import "./css/App.css";
import cachedFetch from "fetch-unless-cached";
import bounding from "bounding";
import { encode } from "wiki-article-name-encoding";

class Hovercard {
  constructor() {
    this.elements = document.querySelectorAll(".hovercard");
    this.setup();
    this.padding = 20;
  }
  setup() {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].addEventListener("mouseover", () => this.mouseOver(this.elements[i]));
      this.elements[i].addEventListener("mouseout", () => this.mouseOut(this.elements[i]));
    }
  }
  createHovercard() {
    if (document.querySelector(".hovercard-real")) return;
    const card = document.createElement("div");
    card.classList.add("hovercard-real");
    document.body.appendChild(card);
    const arrow = document.createElement("div");
    arrow.classList.add("hovercard-arrow");
    document.body.appendChild(arrow);
  }
  positionHovercard(position) {
    const card = document.querySelector(".hovercard-real");
    const arrow = document.querySelector(".hovercard-arrow");
    card.style.top = (position.top + position.height + this.padding) + "px";
    card.style.left = position.left + "px";
    arrow.style.top = (position.top + position.height + this.padding - 10) + "px";
    arrow.style.left = (position.left + (position.width / 2) - 5) + "px";
  }
  updateHovercard(data) {
    if (!(data.displaytitle && data.extract)) return;
    const card = document.querySelector(".hovercard-real");
    const arrow = document.querySelector(".hovercard-arrow");
    console.log(data);
    card.innerHTML = `
      <h2 class="hovercard-title">${data.displaytitle}</h2>
      <p class="hovercard-description">${data.extract}</p>
      <div class="hovercard-image" style="background-image: url('${data.thumbnail.source}')"></div>
    `;
    card.classList.add("hovercard-visible");
    arrow.classList.add("hovercard-visible");
  }
  mouseOver(element) {
    this.createHovercard();
    element.classList.add("hovercard-loading");
    cachedFetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encode(element.innerText)}`)
      .then(response => {
        element.classList.add("hovercard-success");
        this.updateHovercard(response);
      })
      .catch(() => {
        element.classList.add("hovercard-error");
      })
      .then(() => {
        element.classList.remove("hovercard-loading");
      });
    element.classList.add("hovercard-visible");
    this.positionHovercard(bounding(element));
  }
  mouseOut(element) {
    element.classList.remove("hovercard-visible");
    const card = document.querySelector(".hovercard-real");
    const arrow = document.querySelector(".hovercard-arrow");
    card.classList.remove("hovercard-visible");
    arrow.classList.remove("hovercard-visible");
  }
}

export default Hovercard;