import TypeStart from "./typestart";
import Popper from "popper.js";
import "./styles/index.scss";
import { Settings, TextResult, Events } from "./interfaces";
import { encode } from "wiki-article-name-encoding";

declare global {
  interface Window {
    Hovercard: typeof Hovercard;
  }
}

const IS_MOBILE = window.innerWidth < 550;
const TEMPLATE = (
  result: TextResult = { heading: "", body: "" }
) => /* html */ `
  ${
    IS_MOBILE
      ? `<button class="hovercard-close" aria-label="Close">&times;</button>`
      : ""
  }
  <div class="hovercard-card${result.image ? " hovercard-has-image" : ""}">
    <h3 class="hovercard-title">${result.heading}</h3>
    <p class="hovercard-description">${result.body}</p>
    ${
      result.image
        ? `<div class="hovercard-image" style="background-image: url('${result.image}')"></div>`
        : ""
    }
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
    if (IS_MOBILE) {
      this.popperElement.classList.add("hovercard-mobile");
    } else {
      this.popperElement.addEventListener("mouseout", this.mouseOut.bind(this));
    }
    this.popperElement.innerHTML =
      typeof this.settings.template === "function"
        ? this.settings.template()
        : TEMPLATE();
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
    this.emitter.emit(Events.CREATED);
  }
  private removeHoverCardElement(q: string) {
    if (this.elements) {
      const elementsToRemove = this.elements.filter(e => e.innerText === q);
      elementsToRemove.forEach(e => e.classList.remove("hovercard"));
      this.elements = this.elements.filter(e => e.innerText !== q);
      this.emitter.emit(Events.REMOVED_ELEMENT, elementsToRemove);
    }
  }
  private mouseOver(event: MouseEvent) {
    this.isLoading = true;
    this.isVisible = true;
    if (event.target) {
      const element = event.target as HTMLElement;
      const q = element.innerText;
      this.getData(q)
        .then(data => this.getText(data))
        .then(text => this.updateText(text))
        .then(() => this.repositionPopper(element))
        .catch(() => {
          this.removeHoverCardElement(q);
          this.mouseOut();
        });
      this.emitter.emit(Events.SHOW, event.target as HTMLElement);
    }
  }
  private mouseOut(event?: MouseEvent | Event, ignoreHoverCheck = false) {
    let hasHover = !ignoreHoverCheck ? hasMouseOver(this.popperElement) : false;
    if (!ignoreHoverCheck && this.elements) {
      for (let i = 0; i < this.elements.length; i++)
        if (hasMouseOver(this.elements[i])) hasHover = true;
    }
    if (!hasHover) this.close();
  }
  close() {
    this.isVisible = false;
    this.repositionPopper();
    this.emitter.emit(Events.HIDE);
  }
  private updateText(result: TextResult) {
    this.popperElement.innerHTML =
      typeof this.settings.template === "function"
        ? this.settings.template(result)
        : TEMPLATE(result);
    const close = document.querySelector(".hovercard-close");
    if (close) {
      close.removeEventListener("click", this.close.bind(this));
      close.addEventListener("click", this.close.bind(this));
    }
    this.emitter.emit(Events.UPDATE);
  }
  private getText(data: any): TextResult {
    let heading;
    let body;
    let image;
    if (typeof this.settings.getBody === "function")
      body = this.settings.getBody(data);
    if (typeof this.settings.getHeading === "function")
      heading = this.settings.getHeading(data);
    if (typeof this.settings.getImage === "function")
      image = this.settings.getImage(data);
    if (!heading) heading = data.displaytitle as string;
    if (!body) body = data.extract as string;
    if (!image && data.thumbnail && data.thumbnail.source)
      image = data.thumbnail.source as string;
    return { heading, body, image };
  }
  private async getData(word: string) {
    const slug = `hovercard-cache-${btoa(word)}`;
    if (
      !this.settings.noCache &&
      (this.settings.storage || localStorage).getItem(slug)
    )
      return JSON.parse((this.settings.storage || localStorage).getItem(
        slug
      ) as string);
    let result;
    if (typeof this.settings.getData === "function")
      result = await this.settings.getData(word);
    const fetched = await fetch(
      this.settings.fetchEndpoint ||
        `https://${this.settings.wikipediaLanguage ||
          "en"}.wikipedia.org/api/rest_v1/page/summary/${encode(word)}`,
      this.settings.fetchConfig
    );
    if (fetched.status >= 300) throw new Error(fetched.statusText);
    result = await fetched.json();
    this.isLoading = false;
    if (!this.settings.noCache)
      (this.settings.storage || localStorage).setItem(
        slug,
        JSON.stringify(result)
      );
    return result;
  }
}

window.Hovercard = Hovercard;
