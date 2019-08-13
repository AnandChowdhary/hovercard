import TypeStart from "./typestart";
import { random } from "./random";
import Popper from "popper.js";
import "./styles/index.scss";
import { Settings } from "./interfaces";
import { encode } from "wiki-article-name-encoding";

declare global {
  interface Window {
    Hovercard: typeof Hovercard;
  }
}

const IS_MOBILE = window.innerWidth < 550;
const TEMPLATE = /* html */ `
  ${
    IS_MOBILE
      ? `<button class="hovercard-close" aria-label="Close">&times;</button>`
      : ""
  }
  <div class="hovercard-card">
    <h3>{{ heading }}</h3>
    <p>{{ text }}</p>
  </div>
`;

const hasMouseOver = (domElement: HTMLElement) =>
  domElement &&
  domElement.parentElement &&
  domElement.parentElement.querySelector(":hover") === domElement;

export default class Hovercard extends TypeStart {
  popperInstance?: Popper;
  popperElement: HTMLDivElement;
  elements?: HTMLElement[];
  isVisible = false;
  isLoading = false;
  settings: Settings;
  constructor(settings?: Settings) {
    super();
    this.settings = settings || {};
    this.popperElement = document.createElement("div");
    this.popperElement.classList.add("hovercard-element");
    if (IS_MOBILE) this.popperElement.classList.add("hovercard-mobile");
    this.popperElement.addEventListener("mouseout", this.mouseOut.bind(this));
    this.popperElement.innerHTML = this.settings.template || TEMPLATE;
    (document.body || document.documentElement).appendChild(this.popperElement);
    this.start();
  }
  private repositionPopper(element?: Element) {
    if (this.isVisible) {
      if (!IS_MOBILE && element) new Popper(element, this.popperElement);
      this.popperElement.classList.add("visible");
    } else {
      this.popperElement.classList.remove("visible");
    }
  }
  start() {
    this.elements = Array.prototype.slice.call(
      document.querySelectorAll(this.settings.selector || ".hovercard")
    );
    const close = document.querySelector(".hovercard-close");
    if (close) close.addEventListener("click", () => this.mouseOut());
    this.elements.forEach(element => {
      element.removeEventListener("mouseover", this.mouseOver.bind(this));
      element.removeEventListener("click", this.mouseOver.bind(this));
      element.removeEventListener("mouseout", this.mouseOut.bind(this));
      if (IS_MOBILE) {
        element.addEventListener("click", this.mouseOver.bind(this));
      } else {
        element.addEventListener("mouseover", this.mouseOver.bind(this));
        element.addEventListener("mouseout", this.mouseOut.bind(this));
      }
    });
  }
  private removeHoverCardElement(q: string) {
    if (this.elements) {
      const elementsToRemove = this.elements.filter(e => e.innerText === q);
      elementsToRemove.forEach(e => e.classList.remove("hovercard"));
      this.elements = this.elements.filter(e => e.innerText !== q);
    }
  }
  private mouseOver(event: MouseEvent) {
    this.isLoading = true;
    this.isVisible = true;
    if (event.target) {
      const element = event.target as HTMLElement;
      this.repositionPopper(element);
      const q = element.innerText;
      this.getData(q)
        .then(data => console.log("Got", data))
        .catch(() => {
          this.removeHoverCardElement(q);
          this.mouseOut();
        });
    }
  }
  private mouseOut(event?: MouseEvent) {
    let hasHover = hasMouseOver(this.popperElement);
    if (this.elements) {
      for (let i = 0; i < this.elements.length; i++)
        if (hasMouseOver(this.elements[i])) hasHover = true;
    }
    if (!hasHover) {
      this.isVisible = false;
      this.repositionPopper(event && (event.target as HTMLElement));
    }
  }
  private async getData(word: string) {
    let result;
    if (typeof this.settings.getData === "function")
      result = await this.settings.getData(word);
    const fetched = await fetch(
      `https://${this.settings.wikipediaLanguage ||
        "en"}.wikipedia.org/api/rest_v1/page/summary/${encode(word)}`
    );
    if (fetched.status >= 300) throw new Error(fetched.statusText);
    result = fetched.json();
    this.isLoading = false;
    return result;
  }
}

window.Hovercard = Hovercard;
