import TypeStart from "./typestart";
import { random } from "./random";
import Popper from "popper.js";
import "./styles/index.scss";
import { Settings } from "./interfaces";

declare global {
  interface Window {
    Hovercard: typeof Hovercard;
  }
}

const IS_MOBILE = false;
const TEMPLATE = /* html */ `
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
  elements?: NodeListOf<HTMLElement>;
  isVisible = false;
  settings: Settings;
  constructor(settings?: Settings) {
    super();
    this.settings = settings || {};
    this.popperElement = document.createElement("div");
    this.popperElement.classList.add("hovercard-element");
    this.popperElement.addEventListener("mouseout", this.mouseOut.bind(this));
    this.popperElement.innerHTML = this.settings.template || TEMPLATE;
    (document.body || document.documentElement).appendChild(this.popperElement);
    this.start();
  }
  private repositionPopper(element: Element) {
    if (this.isVisible) {
      new Popper(element, this.popperElement);
      this.popperElement.classList.add("visible");
    } else {
      this.popperElement.classList.remove("visible");
    }
  }
  start() {
    this.elements = document.querySelectorAll(
      this.settings.selector || ".hovercard"
    );
    this.elements.forEach(element => {
      element.removeEventListener("mouseover", this.mouseOver.bind(this));
      element.removeEventListener("mouseout", this.mouseOut.bind(this));
      element.addEventListener("mouseover", this.mouseOver.bind(this));
      element.addEventListener("mouseout", this.mouseOut.bind(this));
    });
  }
  private mouseOver(event: MouseEvent) {
    this.isVisible = true;
    if (event.target) this.repositionPopper(event.target as HTMLElement);
  }
  private mouseOut(event: MouseEvent) {
    let hasHover = hasMouseOver(this.popperElement);
    if (this.elements) {
      for (let i = 0; i < this.elements.length; i++)
        if (hasMouseOver(this.elements[i])) hasHover = true;
    }
    if (!hasHover) {
      this.isVisible = false;
      if (event.target) this.repositionPopper(event.target as HTMLElement);
    }
  }
}

window.Hovercard = Hovercard;
