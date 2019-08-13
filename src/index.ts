import TypeStart from "./typestart";
import { random } from "./random";
import Popper from "popper.js";
import "./styles/index.scss";

declare global {
  interface Window {
    Hovercard: typeof Hovercard;
  }
}

const hasMouseOver = (domElement: HTMLElement) =>
  domElement &&
  domElement.parentElement &&
  domElement.parentElement.querySelector(":hover") === domElement;

export default class Hovercard extends TypeStart {
  popperInstance?: Popper;
  popperElement: HTMLDivElement;
  popperArrow: HTMLDivElement;
  elements?: NodeListOf<HTMLElement>;
  isVisible = false;
  constructor(el?: string) {
    super();
    this.popperElement = document.createElement("div");
    this.popperArrow = document.createElement("div");
    this.popperElement.classList.add("hovercard-element");
    this.popperArrow.classList.add("hovercard-arrow");
    this.popperElement.addEventListener("mouseout", this.mouseOut.bind(this));
    this.popperArrow.innerHTML = "Hello, world!";
    this.popperElement.innerHTML = "Hello, world!";
    (document.body || document.documentElement).appendChild(this.popperElement);
    (document.body || document.documentElement).appendChild(this.popperArrow);
    this.start();
  }
  private repositionPopper(element: Element) {
    if (this.isVisible) {
      new Popper(element, this.popperElement, {
        modifiers: {
          offset: {
            offset: "0, 20"
          }
        }
      });
      setTimeout(() => {
        new Popper(this.popperElement, this.popperArrow, {
          placement:
            this.popperElement.getAttribute("x-placement") === "top"
              ? "bottom"
              : "top"
        });
      }, 1);
      this.popperElement.classList.add("visible");
    } else {
      this.popperElement.classList.remove("visible");
    }
  }
  start() {
    this.elements = document.querySelectorAll(".hovercard");
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
